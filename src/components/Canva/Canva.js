import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Scene from "../Scene/Scene";


const Canva = () => {
    return (
        <div className="h-[100%] w-[100%] fixed">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    )
}

export default Canva


