import "../Footer/Footer.scss"
import MainLogo from "../../assets/image/toruslogo.png"
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="py-6 relative bottom-0 bg-[#00416a8e] dark:text-gray-50 md:px-64 mt-10 md:mt-60">
            <div class="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
                <div class="grid grid-cols-12">
                    <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <div rel="noopener noreferrer" href="/" class="flex justify-center space-x-3 md:justify-start">
                            <img src={MainLogo} className="h-[100px]" />
                        </div>
                    </div>
                    <div class="col-span-6 text-center md:text-left md:col-span-3">
                        <ul>
                            <li className="hover:scale-105 mt-2">
                                <a rel="noopener noreferrer" href="/" className="md:text-2xl text-lg text-white hover:scale-150 mt-5">Home</a>
                            </li>
                            <li className="hover:scale-105 mt-2">
                                <a rel="noopener noreferrer" href="/services" className="md:text-2xl text-lg text-white">Services</a>
                            </li>
                            <li className="hover:scale-105 mt-2">
                                <a rel="noopener noreferrer" href="/aboutUs" className="md:text-2xl text-lg text-white hover:scale-150 mt-5">About</a>
                            </li>
                            <li className="hover:scale-105 mt-2">
                                <a rel="noopener noreferrer" href="/letsConnect" className="md:text-2xl text-lg text-white hover:scale-150 mt-10">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-6 text-center md:text-left md:col-span-3">
                        <div class="flex mt-2 w-2/3 lg:w-1/2">
                            <div class="flex flex-col">
                                <h2 class="md:text-2xl text-lg text-white">Call Us</h2>
                                <p class="text-gray-200 text-sm md:text-lg mt-1">Tel:+37062271977</p>
                                <h2 class="md:text-2xl text-white mt-5">Email</h2>
                                <p class="text-gray-200 text-sm md:text-lg mt-1">info@torusbyte.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center pt-6 lg:justify-between">
                    <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span className="text-lg text-white">©2024 All rights reserved</span>
                        <a className="text-lg text-white" rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a className="text-lg text-white" rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/" target="_blank" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full">
                            <FaLinkedin className="text-white text-5xl" />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" title="Twitter" class="flex items-center justify-center w-10 h-10 rounded-full">
                            <FaFacebookSquare className="text-white text-5xl" />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank" title="GitHub" class="flex items-center justify-center w-10 h-10 rounded-full">
                            <FaInstagramSquare className="text-white text-5xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer