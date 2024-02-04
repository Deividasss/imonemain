import "../Services/Services.scss"
import Logo from "../../assets/image/favicon.png"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import LetsConnect from "../LetsConnect/LetsConnect"


const AccordionItem = ({ title, content, index, isOpen, toggleAccordion, description, content2, scrollIntoView }) => (

    <div className="relative mb-3">
        <div className="mb-0 bg-[#00416a8e] md:h-[300px] h-[500px] rounded-[20px] m-5">
            <div className="relative w-full p-4 text-left">
                <div>
                    <div className="md:flex md:mt-5 mt-0">
                        <div className="md:block flex justify-center mb-5 mr-5 ">
                            <img className="md:h-[70px] w-[100px] h-[100px]" src={Logo}></img>
                        </div>
                        <span className="servicesText text-3xl">{title}</span>
                    </div>
                    <p className="text-xl mt-5 text-white">{description}</p>
                </div>
            </div>
        </div>
        <div className={`flex justify-center ${isOpen ? 'hidden' : 'visible mt-[-20px] mx-5 bg-[#00416a] rounded-b-[20px]'}`}>
            <p className="text-white text-xl py-3 servicesText hover:scale-[115%] hover:cursor-pointer" onClick={() => toggleAccordion(index)}>Learn More <span className="flex justify-center"><FaAngleDown className="text-[30px]" /></span></p>
        </div>
        <div className={`overflow-hidden ${isOpen ? 'mt-[-20px] mx-5 bg-[#00416a] rounded-b-[20px] animate__animated animate__slideInDown' : 'h-0'}`}>
            <div className="p-4 leading-normal text-blue-gray-500/80 text-lg text-white animate__animated animate__slideInLeft">{content}</div>
            <div className="p-4 leading-normal text-blue-gray-500/80 text-lg text-white animate__animated animate__slideInLeft">{content2}</div>
            <div className="flex justify-center">
                <button className="mainButton my-5 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollIntoView()}>Contact Us</button>
            </div>
        </div>
    </div>
);


const Services = () => {

    const [openItems, setOpenItems] = useState([]);

    const toggleAccordion = (index) => {
        setOpenItems((prevOpenItems) =>
            prevOpenItems.includes(index)
                ? prevOpenItems.filter((item) => item !== index)
                : [...prevOpenItems, index]
        );
    };

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
            <div className="relative md:px-[10%] px-5 md:text-left text-center">
                <div className="md:pt-[20%] pt-[35%] md:flex">
                    <div className="md:w-[90%]">
                        <h1 className="servicesText text-6xl">Future-Ready IT Solutions for Today's Challenges</h1>
                        <p className="servicesText text-xl mt-6">Elevate your business operations to the next level with our comprehensive IT services. We focus on delivering seamless and efficient solutions, including network management, system integration, and 24/7 support. Experience unparalleled reliability and performance with our advanced IT offerings.</p>
                    </div>
                    <div className="px-20 md:mt-0 mt-10 text-center">
                        <img className="md:w-[600px] " src={Logo} />
                    </div>
                </div>
                <div className="mt-20 grid grid-row md:grid-cols-2">
                    <AccordionItem
                        title="Elevate Your Online Presence with Our Web Development Expertise"
                        description="Unlock the full potential of your online identity with our bespoke web development services. Our team of skilled developers blends creativity with functionality to deliver tailored solutions that resonate with your brand"
                        content={`From the initial concept to the final launch, we collaborate closely with you to understand your goals, preferences, and target audience. Our development process integrates the latest industry standards, ensuring your website is responsive, scalable, and optimized for search engines.`}
                        content2={"We specialize in crafting user-friendly interfaces that enhance the overall user experience, fostering customer engagement and satisfaction. At LithoByte, we don't just build websites; we create digital ecosystems that empower your brand. Our commitment to excellence extends beyond the development phase, with ongoing support and maintenance services to keep your digital asset running smoothly."}
                        index={1}
                        isOpen={openItems.includes(1)}
                        toggleAccordion={toggleAccordion}
                        scrollIntoView={scrollToTarget}
                    />
                    <AccordionItem
                        title="Unleash Potential with Our Mobile App Development Solutions"
                        description="Empower your business in the palm of your users' hands. Our mobile app development services blend creativity and technical prowess to create intuitive, feature-rich applications"
                        content="Embark on a mobile journey of innovation with [Your Company Name]. In a world where digital interactions are increasingly mobile, having a powerful and user-friendly mobile app is essential for staying ahead of the curve. Our mobile app development services are designed to bring your unique ideas to life, delivering not just an app, but an immersive and seamless digital experience."
                        content2={"At LithoByte, we understand that a successful mobile app goes beyond just coding. It's about understanding your business objectives, your target audience, and creating an application that not only meets but exceeds user expectations. Our team of experienced mobile app developers is proficient in both iOS and Android platforms, ensuring that your app reaches a wide audience."}
                        index={2}
                        isOpen={openItems.includes(2)}
                        toggleAccordion={toggleAccordion}
                        scrollIntoView={scrollToTarget}
                    />
                    <AccordionItem
                        title="Strategic Development Consulting: Transforming Visions into Digital Realities"
                        description="Our seasoned consultants blend industry insights with technical expertise to provide strategic guidance for web and mobile projects."
                        content="At LithoByte, we believe in more than just creating digital assets; we empower businesses to harness the full potential of technology. Our team of seasoned consultants collaborates with you to understand your business objectives, industry dynamics, and user expectations. Armed with this knowledge, we craft a customized development roadmap that aligns with your goals and positions you for success."
                        index={3}
                        isOpen={openItems.includes(3)}
                        toggleAccordion={toggleAccordion}
                        scrollIntoView={scrollToTarget}
                    />
                    {/* <AccordionItem
                        title="Custom Web Development"
                        description="We build robust, scalable websites that serve..."
                        content="Tailored web solutions that align perfectly with your business objectives. We build robust, scalable websites that serve as powerful tools for your online presence."
                        index={4}
                        isOpen={openItems.includes(4)}
                        toggleAccordion={toggleAccordion}
                        scrollIntoView={scrollToTarget}
                    /> */}
                </div>
            </div>
            <div id="letsConnect">
                <LetsConnect />
            </div>
        </>
    )
}

export default Services