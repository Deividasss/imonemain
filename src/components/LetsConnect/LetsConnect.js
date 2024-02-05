import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const LetsConnect = () => {
    
    return (
        <>
            <div class="flex relative justify-center md:items-center w-screen pt-20 md:pt-52 animate__animated animate__zoomIn animate__delay-1s">
                <div class="container mx-auto my-4 px-4 lg:px-20 ">
                    <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div class="flex justify-center">
                            <h1 class="font-bold mockupTitle uppercase text-5xl animate__animated animate__zoomIn animate__delay-1s">Let's Connect</h1>
                        </div>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-[#00416A] bg-opacity-45 text-white mt-2 p-3 placeholder-white border-white border-2 rounded-lg focus:outline-2 focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input class="w-full bg-[#00416A] bg-opacity-45 text-white mt-2 p-3 placeholder-white border-white border-2 rounded-lg focus:outline-2 focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                        </div>
                        <div class="my-4">
                            <textarea placeholder="Message*" class="w-full h-32 bg-[#00416A] bg-opacity-45 text-white mt-2 p-3 placeholder-white border-white border-2 rounded-lg focus:outline-2 focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 text-center">
                            <button class="mainButton mt-10 animate__animated animate__zoomIn animate__delay-1s">Contact Us</button>
                        </div>
                    </div>

                    <div
                        class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#00416A] bg-opacity-75 rounded-2xl animate__animated animate__zoomIn animate__delay-1s">
                        <div class="flex flex-col text-white">
                            <h1 class="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                            <p class="text-gray-400">Exciting news on the horizon! While we currently operate in the digital realm, we're thrilled to share that plans are underway to establish a physical office soon. Our commitment to growth and expansion is a testament to the incredible journey we're on with our clients and partners.
                            </p>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <div class="flex flex-col">
                                    <i class="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-2xl">Main Office</h2>
                                    <p class="text-gray-400">Coming Soon!</p>
                                </div>
                            </div>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <div class="flex flex-col">
                                    <i class="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-2xl">Call Us</h2>
                                    <p class="text-gray-400">Tel: +37062271977</p>
                                </div>
                            </div>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/" target="_blank" rel="noreferrer" class="text-4xl mx-1 pt-1">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="text-4xl mx-1 pt-1">
                                    <FaFacebookSquare />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="text-4xl mx-1 pt-1">
                                    <FaInstagramSquare />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LetsConnect