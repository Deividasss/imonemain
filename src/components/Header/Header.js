import "../Homepage/Homepage.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaHouseChimney, FaHive, FaCode, FaAngellist } from "react-icons/fa6";

const Header = () => {

    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed w-[100%] ${isMenuOpen  ? ' bg-[#00416a8e]' : ''} z-50`}>
            <nav class="px-4 lg:px-6 py-9">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">LithoByte</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={` justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen  ? 'visible h-screen' : 'hidden'}`}>
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 text-center ">
                            <li>
                                <a href="#" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen  ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaHouseChimney/></span>Home</a>
                            </li>
                            <li>
                                <a href="#" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen  ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaCode/></span>Services</a>
                            </li>
                            <li>
                                <a href="#" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen  ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaHive/></span>About</a>
                            </li>
                            <li>
                                <a href="/letsConnect" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen  ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaAngellist/></span>Contact</a>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header