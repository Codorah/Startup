'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CenterpieceGeometry({ mousePos }: { mousePos: { x: number; y: number } }) {
  const outerGroup = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Subtle continuous rotation
    if (outerGroup.current) {
      // Smooth lerp towards mouse position
      outerGroup.current.rotation.y += delta * 0.4;
      outerGroup.current.rotation.x = THREE.MathUtils.lerp(
        outerGroup.current.rotation.x,
        mousePos.y * 0.4,
        0.05
      );
      outerGroup.current.rotation.z = THREE.MathUtils.lerp(
        outerGroup.current.rotation.z,
        -mousePos.x * 0.4,
        0.05
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.6;
      coreRef.current.rotation.x += delta * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x += delta * 0.15;
    }

    if (cageRef.current) {
      cageRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={outerGroup}>
      {/* Inner pulsing crystalline distorted core */}
      <mesh ref={coreRef} scale={1.35}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#7c3aed"
          roughness={0.15}
          metalness={0.7}
          distort={0.35}
          speed={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#4c1d95"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Futuristic wireframe cage */}
      <mesh ref={cageRef} scale={1.85}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          wireframe
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Orbiting thin halo ring */}
      <mesh ref={ringRef} scale={2.4}>
        <torusGeometry args={[1, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Mouse tracking for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Graceful fallback for non-WebGL or reduced motion
  if (!hasWebGL || reducedMotion) {
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center">
        <div className="absolute inset-0 bg-radial-purple rounded-full blur-3xl opacity-80" />
        <div className="relative w-64 h-64 rounded-3xl bg-gradient-to-tr from-purple-700 via-violet-600 to-indigo-500 p-1 shadow-2xl shadow-purple-600/30">
          <div className="w-full h-full bg-white/95 rounded-[22px] flex items-center justify-center p-8 text-center backdrop-blur-md">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-2xl shadow-inner">
                C
              </div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                Codorah Digital Engine
              </p>
              <p className="text-xs text-slate-500">
                High-Performance Software & AI Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Background radial violet glow ring */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-purple-500/20 via-violet-400/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full border border-purple-200/50 animate-ping opacity-25 pointer-events-none" />

      {/* R3F Interactive Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[0, 5, 2]} intensity={1} color="#c084fc" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
          <CenterpieceGeometry mousePos={mousePos} />
        </Float>
      </Canvas>
    </div>
  );
}
