"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial, Points, Float } from "@react-three/drei";
import * as THREE from 'three';

// Particle cloud — lighter violet for bright background
function ParticleCloud({ count = 1500 }) {
  const meshRef = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 2 + (Math.random() * 2.5);

      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta / 15;
      meshRef.current.rotation.y -= delta / 10;
      const s = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
      meshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7C3AED"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Inner wireframe core — adapts to light theme
function CoreMesh() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#7C3AED"
          wireframe
          roughness={0.1}
          metalness={0.8}
          emissive="#A855F7"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Soft parallax camera
function ParallaxCamera() {
  const { camera, mouse, size } = useThree();
  const vec = new THREE.Vector3();
  const isMobile = size.width < 768;

  useFrame(() => {
    const targetX = isMobile ? 0 : mouse.x * 2;
    const targetY = isMobile ? 0 : mouse.y * 2;
    camera.position.lerp(vec.set(targetX, targetY, camera.position.z), 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} color="#EDE9FE" />
        <pointLight position={[5, 5, 5]} color="#7C3AED" intensity={3} />
        <pointLight position={[-5, -5, 5]} color="#A855F7" intensity={1.5} />

        <CoreMesh />
        <ParticleCloud count={isMobile ? 300 : 1200} />
        <ParallaxCamera />
      </Canvas>
    </div>
  );
}
