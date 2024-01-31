import "../OurSkills/OurSkills.scss"
import ReactLogo from "../../assets/image/reactLogo.png"
import JavaScriptLogo from "../../assets/image/javaScriptLogo.png"
import PhpLogo from "../../assets/image/phpLogo.png"
import SimfonyLogo from "../../assets/image/simfonyLogo.png"
import NodeJs from "../../assets/image/nodejs.png"
import MySql from "../../assets/image/mySQL.png"

const OurSkills = () => {

    const scrollToTarget = () => {
        const targetBlock = document.getElementById('letsConnect');

        if (targetBlock) {
            targetBlock.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <div class="w-[80%] relative mx-auto">
            <div class=" text-center">
                <h2 class="text-5xl md:text-6xl skillsText">Our Expertise in Development</h2>
                <p class="pt-10 text-xl md:text-2xl skillsText">Explore the depth of our skills, and let us transform your digital vision into a reality. Whether you're a startup seeking an impactful online debut or an established enterprise aiming to enhance your digital footprint, [Your Company Name] is your dedicated partner for unlocking the full potential of the web.</p>
            </div>
            <div className="flex justify-center mt-20">
                <div class=" grid grid-cols-2 gap-12 mb-10 md:grid-cols-4">
                    <div class="text-center">
                        <img className=" h-[60px] mx-auto " src={ReactLogo} />
                    </div>
                    <div class="text-center">
                        <img className=" h-[120px] mt-[-30px] mx-auto " src={PhpLogo} />

                    </div>
                    <div class="text-center">
                        <img className=" h-[60px] mx-auto" src={JavaScriptLogo} />

                    </div>
                    <div class="text-center">
                        <img className="h-[60px] mx-auto " src={NodeJs} />

                    </div>
                    <div class="text-center">
                        <img className="h-[120px] mt-[-30px] mx-auto " src={MySql} />

                    </div>
                    <div class="text-center">
                        <img className="h-[60px] mx-auto " src={SimfonyLogo} />
                    </div>
                    <div class="text-center">
                        <img className="h-[60px] mx-auto " src={"https://www.mygom.tech/_next/image?url=https%3A%2F%2Fmygom-landing.s3.eu-central-1.amazonaws.com%2FMask%20group-16.png&w=1200&q=75"} />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="button mt-5 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Contact Us</button>
            </div>
        </div>
    )
}

export default OurSkills