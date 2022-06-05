import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Box({ position, speed, scale, color, onClick }) {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    const { rotation } = meshRef.current;
    rotation.x += speed;
    rotation.y += speed;
    rotation.z += speed;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
