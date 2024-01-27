import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useState } from "react";

const CubeModel = () => {
  const model = useGLTF("./model/cube.glb");
  const animations = useAnimations(model.animations, model.scene);
  const [rotation, setRotation] = useState([0, 0, 0]);


  // useFrame(({ mouse }) => {
  //   setRotation([mouse.y * 0.2, mouse.x * 0.2, 0]);
  // });


  //   useEffect(() => {
  //     animations.actions.Idle.play();
  //   }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <primitive position-z={3} position-y={0.1} position-x={0.1} object={model.scene} />
    </>
  );
};
useGLTF.preload("./model/cube.glb");

export default CubeModel;
