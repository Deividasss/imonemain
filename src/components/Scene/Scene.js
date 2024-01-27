import { OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useRef } from "react";
import BackgroundModel from "../Models/BackgroundModel/BackgroundModel";
import CubeModel from "../Models/CubeModel/ModelPlus";

const Scene = () => {
  const groupRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.07;
    }
  });
  // useFrame(({ mouse }) => {
  //   // Update rotation based on mouse movement
  //   setRotation([mouse.y * 0.05, mouse.x * 0.05, 0]);
  // });
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
      {/* <OrbitControls /> */}
      {/* <Text position={[0, 0,3]} // Adjust position relative to your model
        rotation={[0, 0, 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={0.5}
        letterSpacing={0.2}
        lineHeight={1}>[Name]</Text>
      <Text position={[0, -0.5, 0]} // Adjust position relative to your model
        rotation={[0, 0, 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={0.2}
        // letterSpacing={0.2}
        lineHeight={1}>Everything from simple task to worldwide project</Text> */}


      <Suspense
        fallback={
          <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      ><group ref={groupRef} rotation={rotation}>
          <BackgroundModel />
        </group>
        <CubeModel mouse={rotation}/>
      </Suspense>
    </>
  );
};

export default Scene;
