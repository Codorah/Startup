"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial, Points, Float } from "@react-three/drei";
import * as THREE from 'three';

// Système de Particules "Neural Network / IA"
function ParticleCloud({ count = 1500 }) {
  const meshRef = useRef();
  
  // Custom distribution function to make a sphere galaxy
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = 2 + (Math.random() * 2.5); // Spread them in a shell 
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if(meshRef.current) {
        meshRef.current.rotation.x -= delta / 15;
        meshRef.current.rotation.y -= delta / 10;
        // Breathing effect on scale
        const s = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
        meshRef.current.scale.set(s,s,s);
    }
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Rig de Caméra Parallax Fluide
function ParallaxCamera() {
  const { camera, mouse, size } = useThree();
  const vec = new THREE.Vector3();
  
  // Switch to simplified view on mobile
  const isMobile = size.width < 768;

  useFrame(() => {
      // Parallax follows mouse softly
      const targetX = isMobile ? 0 : mouse.x * 2.5;
      const targetY = isMobile ? 0 : mouse.y * 2.5;

      camera.position.lerp(vec.set(targetX, targetY, camera.position.z), 0.03);
      camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeScene() {
    // Disable on very thin devices if needed, but here we just optimize
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-full absolute inset-0 z-0 overflow-hidden bg-[#050508]">
            <Canvas camera={{ position: [0, 0, 9], fov: 60 }} gl={{ alpha: true, antialias: false }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} color="#FFD700" intensity={2} />
                
                {/* Centre Flottant : Core */}
                <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                    <mesh>
                        <icosahedronGeometry args={[1.5, 0]} />
                        <meshStandardMaterial 
                            color="#1A0B2E" 
                            wireframe 
                            roughness={0.1} 
                            metalness={1} 
                            emissive="#8B5CF6"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                </Float>

                {/* Cloud de particules (réduit sur mobile pour performance) */}
                <ParticleCloud count={isMobile ? 300 : 1500} />

                <ParallaxCamera />
            </Canvas>
        </div>
    );
}
