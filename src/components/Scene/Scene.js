import { OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { useRef } from "react";
import BackgroundModel from "../Models/BackgroundModel/BackgroundModel";
import CubeModel from "../Models/CubeModel/ModelPlus";
import { BoxGeometry, MeshBasicMaterial } from "three";

const Scene = () => {
  const groupRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [loading, setLoading] = useState(true);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.07;
    }
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[0, 50, 20]}
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <group ref={groupRef} rotation={rotation}>
        <BackgroundModel />
      </group>
      <CubeModel mouse={rotation} />
    </>
  );
};

export default Scene;
