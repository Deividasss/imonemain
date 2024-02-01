import "../Homepage/Homepage.scss"
import 'animate.css';
import LetsConnect from "../LetsConnect/LetsConnect";
import { useNavigate } from "react-router-dom";
import ServicesCards from "../ServicesCards/ServicesCards";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurSkills from "../OurSkills/OurSkills";
import CustomersTestimonies from "../CustomersTestimonies/CustomersTestimonies";


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
            <div className="md:px-[20%]">
                <div className="flex justify-center items-center h-screen">
                    <div className=" p-2 text-center">
                        <h2 className="mockupTitle md:w-[1100px] mt-10 md:text-[75px] text-[50px] animate__animated animate__zoomIn animate__delay-1s leading-[75px]">We Building Tomorrow's Digital Landscape Today</h2>
                        <h2 className="mockupTitle md:w-[1100px] mt-7 text-[25px] leading-7 md:text-[35px] animate__animated animate__zoomIn animate__delay-1s">Everything from simple tasks to worldwide projects</h2>
                        <button className="mainButton mt-16 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Launch Your Project</button>
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
            <div id="letsConnect" className="mt-24 md:mt-0 ">
                <LetsConnect />
            </div>
        </>
    )
}

export default Homepage