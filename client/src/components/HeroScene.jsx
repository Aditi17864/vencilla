import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import textileHeroBg from '../assets/textures/textile_hero_bg.jpg';

// Interactive 3D Scene Component inside Canvas
const Hero3DScene = ({ mousePos, capPopped, setCapPopped }) => {
  const bottleRef = useRef();
  const capGroupRef = useRef();
  const capHeightRef = useRef(0);

  // Particles along center beam
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      y: (Math.random() - 0.5) * 6,
      radius: 0.05 + Math.random() * 0.15,
      speed: 0.8 + Math.random() * 1.5,
      angle: Math.random() * Math.PI * 2,
      scale: 0.015 + Math.random() * 0.025,
    }));
  }, []);

  // 8 floating capsules filling the pharma side background
  const pills = useMemo(() => {
    const colors = [
      '#00BCD4', '#FFFFFF', '#00E5FF', '#80DEEA',
      '#4DD0E1', '#B2EBF2', '#00ACC1', '#26C6DA',
      '#E0F7FA', '#006064', '#0097A7', '#00838F',
    ];
    return Array.from({ length: 8 }).map((_, i) => ({
      // Spread across entire right half AND some in center/left for immersion
      pos: [
        0.5 + Math.random() * 5.5,    // RIGHT half only: x from 0.5 → 6 (pharma side)
        (Math.random() - 0.5) * 7,    // tall vertical spread
        (Math.random() - 0.5) * 3.5,  // depth spread
      ],
      rot: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2],
      // Each capsule tumbles on a unique random axis
      rotSpeed: [
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 0.8,
      ],
      floatSpeed: 0.3 + Math.random() * 1.0,
      floatOffset: Math.random() * Math.PI * 2,
      floatAmp: 0.08 + Math.random() * 0.22,
      // Size variety: small background ones + some larger foreground ones
      radius: 0.045 + Math.random() * 0.12,
      length: 0.12 + Math.random() * 0.28,
      // Two-tone color per capsule
      color1: colors[Math.floor(Math.random() * colors.length)],
      color2: i % 3 === 0 ? '#FFFFFF' : colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.55 + Math.random() * 0.45,
    }));
  }, []);

  // Refs for each pill mesh to animate individually
  const pillRefs = useRef([]);
  if (pillRefs.current.length !== 8) {
    pillRefs.current = Array.from({ length: 8 }, () => React.createRef());
  }

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();


    // 2. Right Pharma Bottle tilt
    if (bottleRef.current) {
      bottleRef.current.rotation.y = THREE.MathUtils.lerp(
        bottleRef.current.rotation.y,
        0.3 + mousePos.current.x * 0.15,
        0.05
      );
      bottleRef.current.rotation.x = THREE.MathUtils.lerp(
        bottleRef.current.rotation.x,
        mousePos.current.y * 0.1,
        0.05
      );
    }

    // 3. 3D BOTTLE CAP POP PHYSICS / ANIMATION
    const targetCapHeight = capPopped ? 1.3 : 0.0;
    capHeightRef.current = THREE.MathUtils.lerp(
      capHeightRef.current,
      targetCapHeight,
      delta * 6.0
    );

    if (capGroupRef.current) {
      capGroupRef.current.position.y = 1.35 + capHeightRef.current;
      if (capPopped) {
        capGroupRef.current.rotation.y += delta * 1.5;
        capGroupRef.current.rotation.z = Math.sin(time * 3) * 0.15;
      } else {
        capGroupRef.current.rotation.y = THREE.MathUtils.lerp(capGroupRef.current.rotation.y, 0, 0.1);
        capGroupRef.current.rotation.z = THREE.MathUtils.lerp(capGroupRef.current.rotation.z, 0, 0.1);
      }
    }

    // 4. Animate all 8 floating capsules — tumble + float
    pills.forEach((pill, i) => {
      const mesh = pillRefs.current[i]?.current;
      if (mesh) {
        mesh.rotation.x += delta * pill.rotSpeed[0];
        mesh.rotation.y += delta * pill.rotSpeed[1];
        mesh.rotation.z += delta * pill.rotSpeed[2];
        mesh.position.y = pill.pos[1] + Math.sin(time * pill.floatSpeed + pill.floatOffset) * pill.floatAmp;
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[-6, 6, 6]} intensity={1.6} color="#FFF5D6" />
      <directionalLight position={[6, 6, 6]} intensity={1.2} color="#80DEEA" />
      <pointLight position={[0, 0, 4]} intensity={0.9} color="#C9A24B" />

      {/* Environment reflections */}
      <Environment preset="city" />


      {/* ================= RIGHT SIDE: 3D PHARMA VIAL & POPPING CAP ================= */}
      <group position={[2.8, -0.3, 0]}>
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.25}>
          <group
            ref={bottleRef}
            onPointerOver={() => setCapPopped(true)}
            onPointerOut={() => setCapPopped(false)}
            onClick={() => setCapPopped((prev) => !prev)}
          >
            {/* Glass Vial Body */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.55, 0.55, 2.2, 32]} />
              <meshPhysicalMaterial
                transmission={0.92}
                opacity={1}
                transparent
                roughness={0.05}
                ior={1.52}
                thickness={0.6}
                color="#E0F7FA"
                attenuationColor="#006064"
                attenuationDistance={1.2}
              />
            </mesh>

            {/* Liquid inside Vial */}
            <mesh position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.48, 0.48, 1.6, 32]} />
              <meshStandardMaterial
                color="#00ACC1"
                transparent
                opacity={0.7}
                roughness={0.1}
                metalness={0.2}
              />
            </mesh>

            {/* Vial Neck */}
            <mesh position={[0, 1.18, 0]}>
              <cylinderGeometry args={[0.38, 0.45, 0.25, 32]} />
              <meshPhysicalMaterial
                transmission={0.9}
                transparent
                roughness={0.05}
                color="#E0F7FA"
              />
            </mesh>

            {/* Vial Lip Ring */}
            <mesh position={[0, 1.32, 0]}>
              <torusGeometry args={[0.38, 0.04, 16, 32]} />
              <meshPhysicalMaterial
                transmission={0.9}
                transparent
                roughness={0.05}
                color="#E0F7FA"
              />
            </mesh>

            {/* Rubber Stopper */}
            <mesh position={[0, 1.33, 0]}>
              <cylinderGeometry args={[0.34, 0.34, 0.08, 32]} />
              <meshStandardMaterial color="#37474F" roughness={0.8} />
            </mesh>

            {/* ================= 3D METALLIC BOTTLE CAP (POPS UP!) ================= */}
            <group ref={capGroupRef} position={[0, 1.35, 0]}>
              {/* Aluminum Crimp Cap Body */}
              <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.4, 0.41, 0.22, 32]} />
                <meshStandardMaterial
                  color="#E0E0E0"
                  metalness={0.95}
                  roughness={0.15}
                />
              </mesh>
              {/* Cap Top Seal Ring */}
              <mesh position={[0, 0.21, 0]}>
                <cylinderGeometry args={[0.38, 0.38, 0.03, 32]} />
                <meshStandardMaterial
                  color="#00BCD4"
                  metalness={0.8}
                  roughness={0.2}
                  emissive="#00ACC1"
                  emissiveIntensity={capPopped ? 0.8 : 0.2}
                />
              </mesh>
              {/* Glowing Aura Light when Cap is Popped */}
              {capPopped && (
                <pointLight position={[0, 0.2, 0]} intensity={2.5} color="#00E5FF" distance={3} />
              )}
            </group>


          </group>
        </Float>
      </group>

      {/* ================= 8 FLOATING TUMBLING CAPSULES — FULL BACKGROUND ================= */}
      <group>
        {pills.map((pill, i) => (
          <group key={i} ref={pillRefs.current[i]} position={pill.pos} rotation={pill.rot}>
            {/* Bottom half */}
            <mesh position={[0, -pill.length * 0.25, 0]}>
              <capsuleGeometry args={[pill.radius, pill.length * 0.5, 6, 12]} />
              <meshPhysicalMaterial
                color={pill.color1}
                roughness={0.15}
                metalness={0.35}
                transmission={0.15}
                transparent
                opacity={pill.opacity}
                emissive={pill.color1}
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Top half — contrasting color */}
            <mesh position={[0, pill.length * 0.25, 0]}>
              <capsuleGeometry args={[pill.radius, pill.length * 0.5, 6, 12]} />
              <meshPhysicalMaterial
                color={pill.color2}
                roughness={0.12}
                metalness={0.4}
                transmission={0.1}
                transparent
                opacity={pill.opacity}
                emissive={pill.color2}
                emissiveIntensity={0.06}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* ================= CENTER GLOWING BEAM & PARTICLES ================= */}
      <group position={[0, 0, 0]}>
        {/* Core Vertical Light Line */}
        <mesh>
          <boxGeometry args={[0.015, 6, 0.015]} />
          <meshStandardMaterial
            emissive="#C9A24B"
            emissiveIntensity={3}
            color="#FFF5D6"
            toneMapped={false}
          />
        </mesh>
        {/* Beam Particles */}
        {particles.map((p, i) => (
          <mesh key={i} position={[Math.sin(p.angle) * p.radius, p.y, Math.cos(p.angle) * p.radius]}>
            <sphereGeometry args={[p.scale, 16, 16]} />
            <meshStandardMaterial
              emissive="#C9A24B"
              emissiveIntensity={4}
              color="#FFF"
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default function HeroScene() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [capPopped, setCapPopped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen min-h-[700px] overflow-hidden bg-[#07090E]">
      {/* Background Dual Split matching Reference Image 1 */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {/* Left Side: Textiles Background */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <img
            src={textileHeroBg}
            alt="Vencilla Textiles"
            className="w-full h-full object-cover opacity-45 scale-105 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/90 via-[#07090E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/80 via-transparent to-[#07090E]" />
        </div>

        {/* Right Side: Pharmaceuticals Background */}
        <div className="w-1/2 h-full relative overflow-hidden bg-gradient-to-br from-[#061A2B] via-[#07131E] to-[#07090E]">
          <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_70%_40%,rgba(0,188,212,0.35)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#07090E]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/80 via-transparent to-[#07090E]" />
        </div>
      </div>

      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} dpr={[1, 2]}>
          <React.Suspense fallback={null}>
            <Hero3DScene
              mousePos={mousePos}
              capPopped={capPopped}
              setCapPopped={setCapPopped}
            />
          </React.Suspense>
        </Canvas>
      </div>

      {/* UI Content Overlay matching Reference Image 1 */}
      <div className="relative z-20 w-full h-full pointer-events-none flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 container-vc">
        {/* Top Header Title */}
        <div className="text-center pointer-events-auto max-w-2xl mx-auto">
          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-gold-gradient drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            VENCILLA
          </h1>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase mt-2">
            TWO DIVISIONS. ONE COMMITMENT. GLOBAL EXCELLENCE.
          </p>
        </div>

        {/* Side Division Overlay Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto pointer-events-none">
          {/* Left Overlay: Textiles */}
          <div className="pointer-events-auto flex flex-col items-start max-w-sm pr-4">
            <div className="flex items-center gap-2 mb-2 text-[#C9A24B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.8L17.2 12 12 17.2 6.8 12 12 6.8z" />
              </svg>
              <span className="eyebrow text-xs tracking-widest">VENCILLA</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold mb-2">
              TEXTILES
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
              Premium fabrics. Timeless craftsmanship.
            </p>
            <Link
              to="/textiles"
              className="btn-secondary"
            >
              EXPLORE TEXTILES &rarr;
            </Link>
          </div>

          {/* Right Overlay: Pharmaceuticals */}
          <div className="pointer-events-auto flex flex-col items-end text-right max-w-sm ml-auto pl-4">
            <div className="flex items-center gap-2 mb-2 text-[#00BCD4]">
              <span className="eyebrow text-xs tracking-widest text-[#00BCD4]">VENCILLA</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-15z" />
              </svg>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold mb-2">
              PHARMACEUTICALS
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-2">
              Trusted quality. Better living worldwide.
            </p>
            {/* Interactive hint for 3D Cap Pop */}
            <p className="text-[11px] text-[#00E5FF] font-mono tracking-wider mb-4 animate-pulse">
              {capPopped ? '✨ 3D BOTTLE CAP POPPED!' : '💡 Click/Hover bottle to pop 3D cap'}
            </p>
            <Link
              to="/pharmaceuticals"
              className="btn-secondary"
              style={{ borderColor: 'rgba(0,188,212,0.6)', color: '#E0F7FA' }}
            >
              EXPLORE PHARMA &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Split Action Cards matching Reference Image 1 */}
        <div className="pointer-events-auto flex flex-col items-center gap-4">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
            CHOOSE YOUR DIVISION
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
            {/* Explore Textiles Card */}
            <Link
              to="/textiles"
              className="flex items-center justify-between px-6 py-4 rounded-md glass-card hover:border-[#C9A24B] transition-all group duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C9A24B]/20 flex items-center justify-center text-[#C9A24B]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.8L17.2 12 12 17.2 6.8 12 12 6.8z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] tracking-wider text-[#C9A24B] uppercase font-bold">
                    EXPLORE
                  </span>
                  <span className="font-serif-luxury text-sm text-white font-bold tracking-wider">
                    TEXTILES
                  </span>
                </div>
              </div>
              <span className="text-white/60 group-hover:translate-x-1 group-hover:text-[#C9A24B] transition-all">
                &rarr;
              </span>
            </Link>

            {/* Explore Pharmaceuticals Card */}
            <Link
              to="/pharmaceuticals"
              className="flex items-center justify-between px-6 py-4 rounded-md glass-card hover:border-[#00BCD4] transition-all group duration-300"
              style={{ background: 'rgba(6, 26, 43, 0.7)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00BCD4]/20 flex items-center justify-center text-[#00BCD4]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] tracking-wider text-[#00BCD4] uppercase font-bold">
                    EXPLORE
                  </span>
                  <span className="font-serif-luxury text-sm text-white font-bold tracking-wider">
                    PHARMACEUTICALS
                  </span>
                </div>
              </div>
              <span className="text-white/60 group-hover:translate-x-1 group-hover:text-[#00BCD4] transition-all">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
