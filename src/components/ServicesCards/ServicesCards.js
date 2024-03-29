import "../ServicesCards/ServicesCards.scss"
import 'animate.css';
import { FaArrowRight } from "react-icons/fa";

const ServicesCards = () => {

    return (
        <div className="flex justify-center">
            <div>
                <h1 className="mainTitle text-center px-5 relative text-[40px] leading-[50px] md:text-6xl pb-10 md:pb-36">Elevate Your Digital Experience With Our Services</h1>
                <div className="flex justify-center">
                    <div className="grid grid-row mb-10 md:grid-cols-3">
                        <div className="flip-card md:ml-1 md:mt-0 mt-20 md:mx-5">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="boxes">
                                        <div class="box">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="box">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="box">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="box">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <p class="pt-4 px-4 flipTitle text-4xl">Development Consulting</p>
                                    <p className="px-4 mt-10 flipTitle text-[19px]">Our seasoned team of web development consultants is dedicated to...</p>
                                    <p className="animate__animated animate__pulse animate__slow animate__infinite md:hidden flipTitle absolute bottom-5 right-[41%] border-white border-solid border-b-2 border-t-2">Hover me</p>
                                </div>
                                <div class="flip-card-back ">
                                    <p className="px-4 flipTitle text-[19px]">Our seasoned team of web development consultants is dedicated to guiding you through the intricacies of the digital landscape, offering tailored solutions to elevate your business to new heights.</p>
                                    <a href="/services" className=" flex mt-16 ml-40 flipTitle text-2xl hover:cursor-pointer hover:scale-125 hover:text-slate-300 " >Learn More <FaArrowRight className="mx-2 mt-1" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card md:mt-0 md:ml-1 mt-20">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="loader">
                                        <div class="loader-cube">
                                            <div class="face"></div>
                                            <div class="face"></div>
                                            <div class="face"></div>
                                            <div class="face"></div>
                                            <div class="face"></div>
                                            <div class="face"></div>
                                        </div>
                                    </div>
                                    <p class="pt-4 px-4 flipTitle text-4xl">Custom Web Development</p>
                                    <p className="px-4 mt-10 flipTitle text-[19px]">We build robust, scalable websites that serve...</p>
                                    <p className="animate__animated animate__pulse animate__slow animate__infinite md:hidden flipTitle absolute bottom-5 left-[41%] border-white border-solid border-b-2 border-t-2">Hover me</p>
                                </div>
                                <div class="flip-card-back">
                                    <p className="px-4 flipTitle text-[19px]">Tailored web solutions that align perfectly with your business objectives. We build robust, scalable websites that serve as powerful tools for your online presence.</p>
                                    <a href="/services" className=" flex mt-16 ml-40 flipTitle text-2xl hover:cursor-pointer hover:scale-125 hover:text-slate-300 " >Learn More <FaArrowRight className="mx-2 mt-1" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card md:mt-0 md:ml-1 mt-20">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div class="loaderr">
                                        <div class="boxer box-1">
                                            <div class="side-left"></div>
                                            <div class="side-right"></div>
                                            <div class="side-top"></div>
                                        </div>
                                        <div class="boxer box-2">
                                            <div class="side-left"></div>
                                            <div class="side-right"></div>
                                            <div class="side-top"></div>
                                        </div>
                                        <div class="boxer box-3">
                                            <div class="side-left"></div>
                                            <div class="side-right"></div>
                                            <div class="side-top"></div>
                                        </div>
                                        <div class="boxer box-4">
                                            <div class="side-left"></div>
                                            <div class="side-right"></div>
                                            <div class="side-top"></div>
                                        </div>
                                    </div>
                                    <p class="pt-4 px-4 flipTitle text-4xl">Mobile App Solutions</p>
                                    <p className="px-4 mt-10 flipTitle text-[19px]">We prioritize user experience in every aspect of app development...</p>
                                    <p className="animate__animated animate__pulse animate__slow animate__infinite md:hidden flipTitle absolute bottom-5 left-[41%] border-white border-solid border-b-2 border-t-2">Hover me</p>
                                </div>
                                <div class="flip-card-back">
                                    <p className="px-4 flipTitle text-[19px]">We prioritize user experience in every aspect of app development, ensuring that your application not only meets but exceeds user expectations.</p>
                                    <a href="/services" className=" flex mt-16 ml-40 flipTitle text-2xl hover:cursor-pointer hover:scale-125 hover:text-slate-300 " >Learn More <FaArrowRight className="mx-2 mt-1" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards