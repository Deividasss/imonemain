import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useState } from "react";

const BackgroundModel = () => {
  const model = useGLTF("./model/futuristic.glb");
  const animations = useAnimations(model.animations, model.scene);
  const [rotation, setRotation] = useState([0, 0, 0]);
  

  // useFrame(({ mouse,}) => {
  //   setRotation([mouse.y * 0.05, mouse.x * 0.05, 0]);
  // });

    // useEffect(() => {
    //   animations.actions.Idle.play();
    // }, []);

  return (
    <primitive rotation={rotation} position-y={-0.4} object={model.scene} />
  );
};
useGLTF.preload("./model/futuristic.glb");

export default BackgroundModel;
