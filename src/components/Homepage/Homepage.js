import "../Homepage/Homepage.scss"
import 'animate.css';
import LetsConnect from "../LetsConnect/LetsConnect";
import { useNavigate } from "react-router-dom";
import ServicesCards from "../ServicesCards/ServicesCards";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurSkills from "../OurSkills/OurSkills";
import CustomersTestimonies from "../CustomersTestimonies/CustomersTestimonies";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Homepage = () => {

    const navigate = useNavigate()

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const scrollToTarget = () => {
        const targetBlock = document.getElementById('letsConnect');

        if (targetBlock) {
            targetBlock.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="md:max-w-[1300px]">
                    <div className="flex justify-center items-center h-screen">
                        <div>
                            <div className=" p-2 text-center">
                                <h1 className="mockupTitle mt-10 md:text-[75px] text-[40px] animate__animated animate__zoomIn animate__delay-1s md:leading-[90px] leading-[50px]">Building Tomorrow's Digital Landscape Today</h1>
                                <p className="mockupTitle mt-7 text-[22px] leading-7 md:text-[35px] animate__animated animate__zoomIn animate__delay-1s">Everything from simple tasks to worldwide projects</p>
                                <button className="mainButton mt-16 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Launch Your Project</button>
                            </div>
                            <div className="md:block hidden">
                                <div class="animate__animated animate__zoomIn animate__delay-1s w-[200px] md:w-[240px] m-auto flex bottom-7 right-7 md:absolute space-x-1 lg:col-end-13 bg-[#00416a8e] border-white border-solid border-2 rounded-xl md:px-3 md:py-1">
                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/" target="_blank" title="Email" class="hover:scale-125 flex items-center justify-center w-16 h-16 rounded-full">
                                        <FaLinkedin className="text-white md:text-5xl text-4xl" />
                                    </a>
                                    <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" title="Twitter" class="hover:scale-125 flex items-center justify-center w-16 h-16 rounded-full">
                                        <FaFacebookSquare className="text-white md:text-5xl text-4xl" />
                                    </a>
                                    <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank" title="GitHub" class="hover:scale-125 flex items-center justify-center w-16 h-16 rounded-full">
                                        <FaInstagramSquare className="text-white md:text-5xl text-4xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-20">
                        <ServicesCards />
                    </div>
                    <div className="md:mt-20">
                        <WhyChooseUs />
                    </div>
                    <div className=" mt-24 md:mt-52">
                        <OurSkills />
                    </div>
                    <div className=" mt-24 md:mt-52">
                        <CustomersTestimonies />
                    </div>
                </div>
            </div>
            <div id="letsConnect">
                <LetsConnect />
            </div>
        </>
    )
}

export default Homepage