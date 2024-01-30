import "../Homepage/Homepage.scss"
import 'animate.css';
import LetsConnect from "../LetsConnect/LetsConnect";
import { useNavigate } from "react-router-dom";
import ServicesCards from "../ServicesCards/ServicesCards";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";


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
            <div className="">
                <div className="flex md:px-28 justify-center items-center h-screen w-screen">
                    <div className=" p-2 text-center">
                        <h2 className="mockupTitle mt-10 md:text-[65px] text-[50px] animate__animated animate__zoomIn animate__delay-1s">We Building Tomorrow's Digital Landscape Today</h2>
                        <h2 className="mockupTitle mt-7 text-[25px] leading-7 md:text-[26px] animate__animated animate__zoomIn animate__delay-1s">Everything from simple tasks to worldwide projects</h2>
                        <button className="button mt-10 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Launch Your Project</button>
                    </div>
                </div>
                <div className="md:px-28 md:mt-20">
                    <ServicesCards />
                </div>
                <div className="md:px-28 md:mt-20">
                    <WhyChooseUs />
                </div>
                <div id="letsConnect" className="md:mt-20 ">
                    <LetsConnect />
                </div>
            </div>
        </>
    )
}

export default Homepage