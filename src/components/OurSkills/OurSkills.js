import "../OurSkills/OurSkills.scss"
import ReactLogo from "../../assets/image/reactLogo.png"
import JavaScriptLogo from "../../assets/image/javaScriptLogo.png"
import PhpLogo from "../../assets/image/phpLogo.png"
import SimfonyLogo from "../../assets/image/simfonyLogo.png"
import MySqlLogo from "../../assets/image/mySQL.png"
import NodeJsLogo from "../../assets/image/nodejs.png"

const OurSkills = () => {
    return (
        <section class="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
            <div class="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 class="text-6xl skillsText">Empowering Digital Excellence <br /> Our Expertise in Development</h2>
                <p class="pt-10 text-2xl skillsText">Explore the depth of our skills, and let us transform your digital vision into a reality. Whether you're a startup seeking an impactful online debut or an established enterprise aiming to enhance your digital footprint, [Your Company Name] is your dedicated partner for unlocking the full potential of the web.</p>
            </div>
            <div class="container mx-auto flex justify-center items-center gap-12">
                <div class="flex items-center p-4">
                    <img className="w-[80px]" src={ReactLogo} alt="React Logo"></img>
                </div>
                <div class="flex items-center p-4">
                    <img className="w-[80px]" src={JavaScriptLogo} alt="JavaScript Logo"></img>
                </div>
                <div class="flex items-center p-4">
                    <img className="w-[120px]" src={PhpLogo} alt="PHP Logo"></img>
                </div>
                <div class="flex items-center p-4">
                    <img className="w-[200px]" src={SimfonyLogo} alt="React Logo"></img>
                </div>
                <div class="flex items-center p-4">
                    <img className="w-[120px]" src={MySqlLogo} alt="React Logo"></img>
                </div>
                <div class="flex items-center p-4">
                    <img className="w-[120px]" src={NodeJsLogo} alt="React Logo"></img>
                </div>
            </div>
        </section>
    )
}

export default OurSkills