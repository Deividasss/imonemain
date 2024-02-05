import "../AboutUs/AboutUs.scss"
import BlurLogo from "../../assets/image/toruslogo.png"
import Logo from "../../assets/image/torusbiglogo.png"
import LetsConnect from "../LetsConnect/LetsConnect"
import CustomersTestimonies from "../CustomersTestimonies/CustomersTestimonies";
import { useEffect, useState } from "react";

const AboutUs = () => {

    const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

    useEffect(() => {
        if (shouldScrollToTop) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setShouldScrollToTop(false);
        }
    }, [shouldScrollToTop]);

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
            <div className="relative px-5 md:text-left text-center flex justify-center items-center">
                <div className="md:max-w-[1300px]">
                    <div className="md:pt-[20%] pt-[35%] md:flex">
                        <div className="">
                            <h1 className="servicesText md:text-6xl text-4xl animate__animated animate__zoomIn animate__delay-1s">Crafting Digital Excellence, Shaping Tomorrow's Technology</h1>
                            <p className="servicesText text-xl mt-6 animate__animated animate__zoomIn animate__delay-1s">Embark on a tech journey with TorusByte, a vibrant force in the IT realm, despite our recent debut. Though our company is young, our spirit is seasoned with ambition, and a team of dedicated professionals stands at the core of our success</p>
                            <div className="md:mx-16 md:mt-10">
                                <button className="mainButton my-5 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Contact Us</button>
                            </div>
                        </div>
                        <img className="md:block hidden md:h-[350px] px-10 animate__animated animate__zoomIn animate__delay-1s" src={Logo}></img>
                    </div>
                    <div className="md:flex md:mt-72 mt-32 ">
                        <img className="md:h-[150px] md:pr-20 animate__animated animate__zoomIn animate__delay-1s" src={BlurLogo}></img>
                        <div>
                            <h1 className="servicesText md:text-6xl text-4xl animate__animated animate__zoomIn animate__delay-1s">Our Story: Nurturing Tech Passion into Innovation</h1>
                            <p className="servicesText text-xl mt-6 animate__animated animate__zoomIn animate__delay-1s">In the ever-evolving landscape of technology, TorusByte was born out of the visionary spirit of its founder, Deividas Kašėta. Founded not long ago, our story begins with Deividas, a tech enthusiast driven by a profound passion for innovation and a belief in the transformative power of youthful energy coupled with seasoned expertise.<br></br><br></br>
                                Join us on this journey of growth, innovation, and a shared commitment to shaping the future of technology.<br></br> TorusByte – where passion meets precision, and every project is a story of innovation waiting to be told.</p>
                            <div className="md:mx-16 md:mt-10">
                                <button className="mainButton my-5 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-40 mt-32 animate__animated animate__zoomIn animate__delay-1s">
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

export default AboutUs