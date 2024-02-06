import "../Loader/Loader.scss"
import Logo from "../../assets/image/toruslogo.png"

const Loader = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#00416a] loaderBack">
            <div>
                <div className="flex justify-center md:pb-0 pb-20">
                    <div class="cubeloader md:ml-20">
                        <div class="box box0">
                            <div></div>
                        </div>
                        <div class="box box1">
                            <div></div>
                        </div>
                        <div class="box box2">
                            <div></div>
                        </div>
                        <div class="box box3">
                            <div></div>
                        </div>
                        <div class="box box4">
                            <div></div>
                        </div>
                        <div class="box box5">
                            <div></div>
                        </div>
                        <div class="box box6">
                            <div></div>
                        </div>
                        <div class="box box7">
                            <div></div>
                        </div>
                        <div class="ground">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[-100px]">
                    <img className="h-[100px]" src={Logo}></img>
                </div>
            </div>
        </div>
    )
}
export default Loader