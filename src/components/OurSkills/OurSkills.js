import "../OurSkills/OurSkills.scss"
import ReactLogo from "../../assets/image/reactLogo.png"
import JavaScriptLogo from "../../assets/image/javaScriptLogo.png"
import PhpLogo from "../../assets/image/phpLogo.png"
import SimfonyLogo from "../../assets/image/simfonyLogo.png"
import NodeJs from "../../assets/image/nodejs.png"
import MySql from "../../assets/image/mySQL.png"
import WordPressLogo from "../../assets/image/wordPressLogo.png"
import ReactNativeLogo from "../../assets/image/ReactNativeLogo.png"

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
        <div class="relative mx-auto">
            <div class="flex justify-center text-center">
                <div>
                    <h2 class="text-5xl md:text-6xl skillsText">Our Expertise in Development</h2>
                    <p class="pt-10 px-10 text-xl md:px-[10%] md:text-2xl skillsText">Explore the depth of our skills, and let us transform your digital vision into a reality. Whether you're a startup seeking an impactful online debut or an established enterprise aiming to enhance your digital footprint, TorusByte is your dedicated partner for unlocking the full potential of the web.</p>
                </div>
            </div>
            <div className="flex justify-center mt-20 px-8">
                <div class=" grid grid-cols-2 gap-12 mb-10 md:grid-cols-4">
                    <div class="text-center">
                        <img className=" h-[60px]" src={ReactLogo} />
                    </div>
                    <div class="text-center">
                        <img className=" h-[120px] mt-[-30px] mx-auto" src={PhpLogo} />

                    </div>
                    <div class="text-center">
                        <img className=" h-[60px] mx-auto" src={JavaScriptLogo} />

                    </div>
                    <div class="text-center">
                        <img className="h-[60px] mx-auto" src={NodeJs} />

                    </div>
                    <div class="text-center">
                        <img className="h-[120px] mx-auto mt-[-30px]" src={MySql} />

                    </div>
                    <div class="text-center">
                        <img className="mt-5 md:mt-0 md:h-[60px]" src={SimfonyLogo} />
                    </div>
                    <div class="text-center">
                        <img className="h-[120px] mx-auto mt-[-30px]" src={WordPressLogo} />
                    </div>
                    <div class="text-center">
                        <img className="mt-5 md:mt-0 md:h-[50px]" src={ReactNativeLogo} />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="mainButton mt-5 animate__animated animate__zoomIn animate__delay-1s" onClick={() => scrollToTarget()}>Contact Us</button>
            </div>
        </div>
    )
}

export default OurSkills