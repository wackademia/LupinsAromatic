import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

const _scale = new THREE.Vector3();

export default function SoapBar3D({ image, hovered = false, size = 1 }) {
  const group = useRef();
  const texture = useTexture(image);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * (hovered ? 0.9 : 0.22);
    g.rotation.x = 0.15 + Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    const target = (hovered ? 1.1 : 1) * size;
    g.scale.lerp(_scale.set(target, target, target), 0.08);
  });

  return (
    <group ref={group} rotation={[0.15, 0.4, 0]} scale={size}>
      <RoundedBox args={[2.1, 0.55, 1.4]} radius={0.16} smoothness={4} castShadow receiveShadow>
        <meshPhysicalMaterial
          map={texture}
          roughness={0.4}
          clearcoat={0.35}
          clearcoatRoughness={0.25}
        />
      </RoundedBox>
    </group>
  );
}
