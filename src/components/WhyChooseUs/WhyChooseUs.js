import { FaCheck } from "react-icons/fa";
import "../WhyChooseUs/WhyChooseUs.scss"

const WhyChooseUs = () => {
    return (
        <div className="mt-52 h-screen">
            <h1 className="mainTitle text-center relative text-5xl md:text-6xl px-2 md:px-40 pb-10 md:pb-20">Elevate Your Business with [Your Company Name]: Here's Why We Stand Out</h1>
            <div className="">
                <ul class="relative space-y-4 item-center">
                    <div className="flex">
                        <li class="flex items-center justify-center bg-[#00416a8e] p-7 w-[90%] md:w-[50%] m-auto rounded-[50px]">
                            <div>
                                <div className="flex">
                                    <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                    <p className="listText text-[25px] mb-2">Expert Development Team</p>
                                </div>
                                <span className="text-white text-[19px]">Our team of experienced developers stays abreast of the latest industry trends and technologies, delivering cutting-edge solutions.</span>
                            </div>
                        </li>
                    </div>
                    <li class="flex items-center justify-center bg-[#00416a8e] p-7 w-[90%] md:w-[50%] m-auto rounded-[50px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Transparent Communication</p>
                            </div>
                            <span className="text-white text-[20px]">We believe in open and transparent communication throughout the development process, keeping you informed and involved every step of the way.</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-center bg-[#00416a8e] p-7 w-[90%] md:w-[50%] m-auto rounded-[50px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Reliable Support</p>
                            </div>
                            <span className="text-white text-[20px]">Count on us for reliable and responsive support. We are committed to ensuring your systems run smoothly at all times.</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-center bg-[#00416a8e] p-7 w-[90%] md:w-[50%] m-auto rounded-[50px]">
                        <div>
                            <div className="flex">
                                <FaCheck className="text-6xl mt-[-15px] pr-3 text-[#F08080] animate__animated animate__heartBeat animate__infinite animate__slower" />
                                <p className="listText text-[25px] mb-2">Transparent Communication</p>
                            </div>
                            <span className="text-white text-[20px]">We believe in open and transparent communication throughout the development process, keeping you informed and involved every step of the way.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhyChooseUs