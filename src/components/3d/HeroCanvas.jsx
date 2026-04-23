import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ color, position, speed, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) * speed;
    meshRef.current.rotation.y = Math.cos(time / 2) * speed;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F9E7E7" />
        
        <FloatingShape 
          color="#D4E2D4" 
          position={[4, 2, 0]} 
          speed={2} 
          scale={[1.5, 1.5, 1.5]} 
        />
        <FloatingShape 
          color="#F9E7E7" 
          position={[-5, -2, -2]} 
          speed={1.5} 
          scale={[1.2, 1.2, 1.2]} 
        />
        <FloatingShape 
          color="#E5B7B7" 
          position={[0, 4, -4]} 
          speed={3} 
          scale={[0.8, 0.8, 0.8]} 
        />

        {/* Dynamic Background Gradient (Artistic) */}
        <mesh position={[0, 0, -10]}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="#FFF9F9" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
