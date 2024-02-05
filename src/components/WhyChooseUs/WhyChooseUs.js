import { FaCheck } from "react-icons/fa";
import "../WhyChooseUs/WhyChooseUs.scss"

const WhyChooseUs = () => {
    return (
        <div className="mt-24 md:mt-48 ">
            <div className="flex justify-center">
            <h1 className="mainTitle text-center relative text-5xl md:text-6xl pb-10 md:pb-20">Why Choose LithoByte</h1>
            </div>
            <div className="">
                <ul class="relative space-y-4 item-center">
                        <li class="flex items-center justify-center bg-[#00416a8e] border-b-[10px] p-7 w-[90%] md:w-[650px] m-auto rounded-b-[50px] rounded-t-[15px]">
                            <div>
                                <div className="flex">
                                    <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                    <p className="listText text-[25px] mb-2">Expert Development Team</p>
                                </div>
                                <span className="text-white text-[19px]">Our team of experienced developers stays abreast of the latest industry trends and technologies, delivering cutting-edge solutions.</span>
                            </div>
                        </li>
                    <li class="flex items-center justify-center bg-[#00416a8e] border-b-[10px] p-7 w-[90%] md:w-[650px] m-auto rounded-b-[50px] rounded-t-[15px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Transparent Communication</p>
                            </div>
                            <span className="text-white text-[20px]">We believe in open and transparent communication throughout the development process, keeping you informed and involved every step of the way.</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-center bg-[#00416a8e] border-b-[10px] p-7 w-[90%] md:w-[650px] m-auto rounded-b-[50px] rounded-t-[15px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Reliable Support</p>
                            </div>
                            <span className="text-white text-[20px]">Count on us for reliable and responsive support. We are committed to ensuring your systems run smoothly at all times.</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-center bg-[#00416a8e] border-b-[10px] p-7 w-[90%] md:w-[650px] m-auto rounded-b-[50px] rounded-t-[15px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Collaborative Partnership</p>
                            </div>
                            <span className="text-white text-[20px]">Consider us not just as a service provider but as a collaborative partner invested in your success, offering strategic insights and guidance.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhyChooseUs