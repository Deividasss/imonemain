import "../OurSkills/OurSkills.scss"
import ReactLogo from "../../assets/image/reactLogo.png"
import JavaScriptLogo from "../../assets/image/javaScriptLogo.png"
import PhpLogo from "../../assets/image/phpLogo.png"
import SimfonyLogo from "../../assets/image/simfonyLogo.png"
import NodeJs from "../../assets/image/nodejs.png"
import MySql from "../../assets/image/mySQL.png"

const OurSkills = () => {
    return (
        <section class="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
            <div class="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 class="text-6xl skillsText">Empowering Digital Excellence <br /> Our Expertise in Development</h2>
                <p class="pt-10 text-2xl skillsText">Explore the depth of our skills, and let us transform your digital vision into a reality. Whether you're a startup seeking an impactful online debut or an established enterprise aiming to enhance your digital footprint, [Your Company Name] is your dedicated partner for unlocking the full potential of the web.</p>
            </div>
            <div class="container md:w-[50%] mx-auto grid justify-center gap-2 grid-cols-2 lg:grid-cols-4">
                <div class="flex flex-col items-center ">
                    <div class="flex flex-col items-center ">
                        <img className="w-[100px] md:w-[80px]" src={ReactLogo}></img>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex flex-col items-center ">
                        <img className="w-[200px] md:w-[150px] " src={SimfonyLogo}></img>
                    </div>
                </div>
                <div class="flex flex-col items-center ">
                    <div class="flex flex-col items-center ">
                        <img className="w-[75px]" src={JavaScriptLogo}></img>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex flex-col ">
                        <img className="w-[180px]" src={PhpLogo}></img>
                    </div>
                </div>
                <div class="flex flex-col items-center ">
                    <div class="flex flex-col items-center">
                        <img className="w-[100px]" src={NodeJs}></img>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-[-20px]">
                    <div class="flex flex-col items-center">
                        <img className="w-[120px]" src={MySql}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSkills