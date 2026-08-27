import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Key Export Destinations with Lat/Long coordinates
const exportHubs = [
  { name: 'Surat / Mumbai (HQ)', lat: 21.17, lng: 72.83, isHQ: true },
  { name: 'London, UK', lat: 51.5074, lng: -0.1278 },
  { name: 'New York, USA', lat: 40.7128, lng: -74.006 },
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708 },
  { name: 'Accra, Ghana', lat: 5.6037, lng: -0.187 },
  { name: 'Nairobi, Kenya', lat: -1.2921, lng: 36.8219 },
  { name: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792 },
  { name: 'Johannesburg, South Africa', lat: -26.2041, lng: 28.0473 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'Geneva, Switzerland', lat: 46.2044, lng: 6.1432 },
  { name: 'Moscow, Russia', lat: 55.7558, lng: 37.6173 },
  { name: 'Tashkent, Uzbekistan', lat: 41.2995, lng: 69.2401 },
  { name: 'Addis Ababa, Ethiopia', lat: 9.03, lng: 38.74 },
  { name: 'Bangkok, Thailand', lat: 13.7563, lng: 100.5018 },
];

// Helper to convert Lat/Long to 3D Sphere Coordinates
function latLngToVector3(lat, lng, radius = 2.0) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate quadratic bezier curve connecting HQ to a destination hub
function createTradeCurve(startVec, endVec, altitude = 0.5) {
  const mid = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  const dist = startVec.distanceTo(endVec);
  const midLength = mid.length();
  mid.normalize().multiplyScalar(midLength + dist * 0.25 + altitude);
  const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
  return curve;
}

// Animated 3D Earth Mesh inside Canvas
function EarthMesh() {
  const earthGroupRef = useRef();
  const cloudRef = useRef();
  const pulseRingsRef = useRef([]);

  const hqPos = useMemo(() => latLngToVector3(21.17, 72.83, 2.0), []);

  // Compute trade routes & curve points
  const tradeRoutes = useMemo(() => {
    return exportHubs
      .filter((h) => !h.isHQ)
      .map((hub) => {
        const destPos = latLngToVector3(hub.lat, hub.lng, 2.0);
        const curve = createTradeCurve(hqPos, destPos);
        const points = curve.getPoints(50);
        return {
          hub,
          destPos,
          curve,
          points,
          geo: new THREE.BufferGeometry().setFromPoints(points),
        };
      });
  }, [hqPos]);

  // Generate glowing procedural dot continent pattern
  const continentPoints = useMemo(() => {
    const pts = [];
    const count = 2200;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = 2.01 * Math.cos(theta) * Math.sin(phi);
      const y = 2.01 * Math.sin(theta) * Math.sin(phi);
      const z = 2.01 * Math.cos(phi);
      // Density modulation to simulate continents
      if (Math.sin(x * 2) * Math.cos(y * 3) + Math.sin(z * 2.5) > -0.2) {
        pts.push(new THREE.Vector3(x, y, z));
      }
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state, delta) => {
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * 0.12;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={earthGroupRef}>
      {/* 1. Deep Ocean Core Sphere */}
      <mesh>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshStandardMaterial
          color="#061A2B"
          roughness={0.6}
          metalness={0.4}
          emissive="#040D17"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* 2. Glowing Golden Continents Dot Cloud */}
      <points geometry={continentPoints}>
        <pointsMaterial
          size={0.035}
          color="#C9A24B"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 3. Outer Atmosphere Glowing Shell */}
      <mesh>
        <sphereGeometry args={[2.08, 48, 48]} />
        <meshPhysicalMaterial
          color="#00BCD4"
          transmission={0.9}
          transparent
          opacity={0.25}
          roughness={0.1}
          ior={1.2}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 4. HQ Marker (India - Golden Radiant Beacon) */}
      <group position={hqPos}>
        <mesh>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
        <mesh>
          <ringGeometry args={[0.09, 0.13, 32]} />
          <meshBasicMaterial color="#FFD700" side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
        <pointLight intensity={2.0} distance={1.5} color="#FFD700" />
      </group>

      {/* 5. Destination Hub Markers & Trade Arcs */}
      {tradeRoutes.map((route, i) => (
        <group key={i}>
          {/* Trade Bezier Glowing Line */}
          <line geometry={route.geo}>
            <lineBasicMaterial
              color={i % 2 === 0 ? '#C9A24B' : '#00E5FF'}
              transparent
              opacity={0.65}
              linewidth={1.5}
            />
          </line>

          {/* Destination Pin */}
          <group position={route.destPos}>
            <mesh>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#C9A24B' : '#00E5FF'} />
            </mesh>
            <mesh>
              <ringGeometry args={[0.05, 0.08, 24]} />
              <meshBasicMaterial
                color={i % 2 === 0 ? '#C9A24B' : '#00E5FF'}
                side={THREE.DoubleSide}
                transparent
                opacity={0.6}
              />
            </mesh>
          </group>
        </group>
      ))}

      {/* 6. Orbital Satellite Ring */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <ringGeometry args={[2.55, 2.57, 64]} />
        <meshBasicMaterial color="#C9A24B" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function Earth3D({ height = '550px' }) {
  return (
    <div
      className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 bg-gradient-to-b from-[#06111D] via-[#07090E] to-[#04080F]"
      style={{ height }}
    >
      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 1.2, 5.2], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 4, 4]} intensity={1.8} color="#FFF5D6" />
        <directionalLight position={[-5, -3, -4]} intensity={0.8} color="#00BCD4" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#C9A24B" />

        <Stars radius={40} depth={30} count={1200} factor={3} saturation={0.5} fade speed={1.2} />

        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
          <React.Suspense fallback={null}>
            <EarthMesh />
          </React.Suspense>
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>

      {/* Floating Info Overlay */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none text-left">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A24B] uppercase font-bold block mb-1">
          LIVE 3D TRADE CORRIDORS
        </span>
        <h3 className="font-serif-luxury text-xl font-bold text-white">
          48+ Global Export Destinations
        </h3>
      </div>

      {/* Bottom Hub Tags Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl glass-card border border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-ping" />
          <span className="font-serif-luxury font-bold text-[#FFD700]">HQ: Surat & Mumbai (India)</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-white/80 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
            Textiles Routes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            Pharma Routes
          </span>
          <span className="text-white/40 hidden sm:inline">| Drag to Rotate 360°</span>
        </div>
      </div>
    </div>
  );
}
