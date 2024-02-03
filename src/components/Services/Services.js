import "../Services/Services.scss"
import Logo from "../../assets/image/favicon.png"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import LetsConnect from "../LetsConnect/LetsConnect"


const AccordionItem = ({ title, content, index, isOpen, toggleAccordion, description }) => (
    <div className="relative mb-3">
        <div className="mb-0 bg-[#00416a8e] h-[250px] rounded-[20px] flex items-center m-5">
            <button className="relative w-full p-4 text-left cursor-pointer" onClick={() => toggleAccordion(index)}>
                <div>
                    <span className="servicesText text-3xl">{title}</span>
                    <p className="text-xl mt-5 text-white">{description}</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-white text-xl mt-5">Learn More <span className="flex justify-center"><FaAngleDown className="text-[30px] mt-1 ml-1" /></span></p>
                </div>
            </button>
        </div>
        <div className={`overflow-hidden ${isOpen ? 'mt-[-20px] mx-5 bg-[#00416a] rounded-b-[20px] animate__animated animate__slideInDown' : 'h-0'}`}>
            <div className="p-4 leading-normal text-blue-gray-500/80 text-lg text-white animate__animated animate__slideInLeft">{content}</div>
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
                        title="Custom Web Development"
                        description="We build robust, scalable websites that serve..."
                        content="Tailored web solutions that align perfectly with your business objectives. We build robust, scalable websites that serve as powerful tools for your online presence."
                        index={1}
                        isOpen={openItems.includes(1)}
                        toggleAccordion={toggleAccordion}
                    />
                    <AccordionItem
                        title="Mobile App Solutions"
                        description="We prioritize user experience in every aspect of app development..."
                        content="We prioritize user experience in every aspect of app development, ensuring that your application not only meets but exceeds user expectations."
                        index={2}
                        isOpen={openItems.includes(2)}
                        toggleAccordion={toggleAccordion}
                    />
                    <AccordionItem
                        title="Development Consulting"
                        description="Our seasoned team of web development consultants is dedicated to..."
                        content="Our seasoned team of web development consultants is dedicated to guiding you through the intricacies of the digital landscape, offering tailored solutions to elevate your business to new heights."
                        index={3}
                        isOpen={openItems.includes(3)}
                        toggleAccordion={toggleAccordion}
                    />
                    <AccordionItem
                        title="Custom Web Development"
                        description="We build robust, scalable websites that serve..."
                        content="Tailored web solutions that align perfectly with your business objectives. We build robust, scalable websites that serve as powerful tools for your online presence."
                        index={4}
                        isOpen={openItems.includes(4)}
                        toggleAccordion={toggleAccordion}
                    />
                </div>
            </div>
            <div>
                <LetsConnect />
            </div>
        </>
    )
}

export default Services