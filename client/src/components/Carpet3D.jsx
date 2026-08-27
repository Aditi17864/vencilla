import React, { useRef, useState, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import luxuryFabricDrape from '../assets/textures/luxury_fabric_drape.jpg';

// Error boundary to catch WebGL / texture failures gracefully
class Carpet3DErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('[Carpet3D] 3D scene error caught by boundary:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-[480px] relative bg-gradient-to-b from-[#0B0F17] via-[#07090E] to-[#04060A] rounded-2xl overflow-hidden border border-[#C9A24B]/30 shadow-2xl flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-16 h-16 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-white mb-2">3D Textile Viewer</h3>
            <p className="text-xs text-white/50">WebGL unavailable in this environment.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// 3D Textile Bolt with Realistic Roll-On / Roll-Off Physics
const RollableFabricMesh = ({ rollProgress, autoPlay }) => {
  const groupRef = useRef();
  const rolledCylinderRef = useRef();
  const flatClothRef = useRef();

  // Load fabric texture with natural matte repeat
  const fabricTexture = useTexture(luxuryFabricDrape);
  fabricTexture.wrapS = THREE.RepeatWrapping;
  fabricTexture.wrapT = THREE.RepeatWrapping;
  fabricTexture.repeat.set(1.5, 1);

  // Maximum unrolled length & base roll radius
  const maxFlatLength = 4.0;
  const fabricWidth = 3.2;
  const initialRadius = 0.55;
  const minRadius = 0.18;

  // Calculate dynamic roll radius based on amount unrolled
  // As fabric unrolls, roll gets thinner
  const currentRadius = THREE.MathUtils.lerp(initialRadius, minRadius, rollProgress);
  const currentFlatLength = rollProgress * maxFlatLength;
  
  // Starting Z position for roll and flat sheet
  const startZ = -1.8;
  const cylinderZ = startZ + currentFlatLength;

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Gentle waving ripples on the unrolled fabric portion
    if (flatClothRef.current && flatClothRef.current.geometry) {
      const position = flatClothRef.current.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const u = position.getX(i);
        const v = position.getY(i);
        // Soft natural cloth undulating waves (not glassy)
        const wave = Math.sin(u * 2.5 + time * 1.5) * 0.04 + Math.cos(v * 3.0 + time * 1.2) * 0.03;
        position.setZ(i, wave);
      }
      flatClothRef.current.geometry.computeVertexNormals();
      flatClothRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Cylinder rolls forward/backward with rotation proportional to distance traveled
    if (rolledCylinderRef.current) {
      // Rotation angle = distance / radius
      rolledCylinderRef.current.rotation.x = -(currentFlatLength / (currentRadius || 0.3));
    }

    // Gentle ambient sway
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (rollProgress - 0.5) * 0.35,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. Flat Unrolled Portion of Fabric (Only visible when partially/fully unrolled) */}
      {rollProgress > 0.02 && (
        <mesh
          ref={flatClothRef}
          position={[0, -currentRadius + 0.02, startZ + currentFlatLength / 2]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[fabricWidth, currentFlatLength, 32, 32]} />
          {/* Authentic Woven Fabric Standard Material (Matte, Non-Glassy) */}
          <meshStandardMaterial
            map={fabricTexture}
            roughness={0.75}
            metalness={0.05}
            bumpScale={0.04}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* 2. Golden Border Hem at the Back Origin */}
      <mesh position={[0, -currentRadius + 0.03, startZ]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[fabricWidth + 0.04, 0.06, 0.02]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 3. Rolling Cylinder Bolt (Moves forward as it unrolls) */}
      <group position={[0, 0, cylinderZ]}>
        {/* Fabric Roll Cylinder */}
        <mesh
          ref={rolledCylinderRef}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[currentRadius, currentRadius, fabricWidth, 48]} />
          <meshStandardMaterial
            map={fabricTexture}
            roughness={0.72}
            metalness={0.06}
            bumpScale={0.03}
          />
        </mesh>

        {/* Inner Wooden / Gold Spindle Core */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[minRadius * 0.7, minRadius * 0.7, fabricWidth + 0.1, 24]} />
          <meshStandardMaterial color="#C9A24B" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Gold Trim End Caps on Spindle */}
        <mesh position={[fabricWidth / 2 + 0.03, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[currentRadius + 0.015, currentRadius + 0.015, 0.03, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[-fabricWidth / 2 - 0.03, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[currentRadius + 0.015, currentRadius + 0.015, 0.03, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
        </mesh>
      </group>
    </group>
  );
};

export default function Carpet3D() {
  const [rollProgress, setRollProgress] = useState(0.65); // 0 = fully rolled, 1 = fully unrolled
  const [isAutoRolling, setIsAutoRolling] = useState(false);

  // Auto-rolling animation handler
  React.useEffect(() => {
    let animId;
    if (isAutoRolling) {
      let direction = 1;
      const step = () => {
        setRollProgress((prev) => {
          if (prev >= 0.98) direction = -1;
          if (prev <= 0.05) direction = 1;
          return Math.min(0.99, Math.max(0.02, prev + direction * 0.006));
        });
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isAutoRolling]);

  return (
    <Carpet3DErrorBoundary>
      <div className="w-full h-[480px] relative bg-gradient-to-b from-[#0B0F17] via-[#07090E] to-[#04060A] rounded-2xl overflow-hidden border border-[#C9A24B]/30 shadow-2xl">
        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 2.2, 4.5], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.85} />
          <directionalLight position={[5, 7, 5]} intensity={1.4} color="#FFF8E7" />
          <directionalLight position={[-5, 4, -4]} intensity={0.6} color="#FFE082" />
          <pointLight position={[0, 1, 3]} intensity={0.8} color="#C9A24B" />
          
          <React.Suspense fallback={null}>
            <Environment preset="apartment" />
            <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
              <RollableFabricMesh rollProgress={rollProgress} autoPlay={isAutoRolling} />
            </Float>
          </React.Suspense>
          
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2.05}
            minPolarAngle={Math.PI / 6}
          />
        </Canvas>

        {/* Top Header Badge */}
        <div className="absolute top-4 left-6 z-20 pointer-events-none text-left">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A24B] uppercase font-bold block mb-1">
            3D TEXTILE SIMULATION
          </span>
          <h3 className="font-serif-luxury text-base font-bold text-white">
            Royal Silk &amp; Jacquard Fabric Roll Physics
          </h3>
        </div>

        {/* Interactive Controls Overlay matching user request */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4 glass-card px-5 py-3.5 rounded-xl z-20 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#C9A24B] animate-pulse" />
            <span className="text-xs font-serif-luxury font-bold tracking-wider text-white uppercase hidden sm:inline">
              ROLL ON / ROLL OFF CONTROLS
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-sans">
            {/* Roll On Button (Rolls back up into tight bolt) */}
            <button
              onClick={() => {
                setIsAutoRolling(false);
                setRollProgress(0.02);
              }}
              className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-white bg-white/10 hover:bg-[#C9A24B] hover:text-[#07090E] rounded transition-all uppercase"
            >
              ROLL ON
            </button>

            {/* Interactive Drag Slider */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0.02"
                max="0.99"
                step="0.01"
                value={rollProgress}
                onChange={(e) => {
                  setIsAutoRolling(false);
                  setRollProgress(parseFloat(e.target.value));
                }}
                className="w-24 sm:w-36 accent-[#C9A24B] cursor-pointer"
              />
            </div>

            {/* Roll Off Full Button (Unrolls full fabric sheet) */}
            <button
              onClick={() => {
                setIsAutoRolling(false);
                setRollProgress(0.99);
              }}
              className="px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#07090E] bg-[#C9A24B] hover:bg-[#E5C26B] rounded transition-all shadow-md uppercase"
            >
              ROLL OFF
            </button>

            {/* Auto Loop Toggle */}
            <button
              onClick={() => setIsAutoRolling((prev) => !prev)}
              className={`px-3 py-1.5 text-[10px] font-bold tracking-wider rounded transition-all uppercase ${
                isAutoRolling
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-white/10 text-white/80 hover:text-white'
              }`}
            >
              {isAutoRolling ? '⏹ STOP' : '▶ AUTO'}
            </button>
          </div>
        </div>
      </div>
    </Carpet3DErrorBoundary>
  );
}
