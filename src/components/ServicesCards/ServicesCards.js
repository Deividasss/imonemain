import "../ServicesCards/ServicesCards.scss"
import 'animate.css';
import { FaArrowRight } from "react-icons/fa";

const ServicesCards = () => {
    return (
        <div>
            <h1 className="mainTitle text-center relative text-5xl md:text-6xl px-2 md:px-40 pb-10 md:pb-36">Elevate Your Digital Experience With Our Services</h1>
            <div className="md:flex justify-center space-x-4">
                <div className="flip-card ml-5 md:ml-0 md:mt-0 mt-20">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            {/* <div class="boxes">
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
                            </div> */}
                            <p class="pt-4 px-4 flipTitle text-4xl">Development Consulting</p>
                        </div>
                        <div class="flip-card-back ">
                            <p className="px-4 flipTitle text-[19px]">Our seasoned team of web development consultants is dedicated to guiding you through the intricacies of the digital landscape, offering tailored solutions to elevate your business to new heights.</p>
                            <p className=" flex mt-16 ml-40 flipTitle text-2xl hover:cursor-pointer hover:scale-125 hover:text-slate-300 " onClick={() => alert("")}>Learn More <FaArrowRight className="mx-2 mt-1" /></p>
                        </div>
                    </div>
                </div>
               
    
            </div>
        </div>
    )
}

export default ServicesCards