import "../Header/Header.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaHouseChimney, FaHive, FaCode, FaAngellist, FaBars } from "react-icons/fa6";
import MainLogo from "../../assets/image/mainLogo.png"

const Header = () => {

    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    window.addEventListener('scroll', () => {
        const offset = 100
        if (window.scrollY >= offset)
            document.getElementById('navigation').classList.add('scrolled')
        else
            document.getElementById('navigation').classList.remove('scrolled')
    })

    return (
        <header className={`fixed w-[100%] ${isMenuOpen ? 'jolo' : ''} z-50`}>
            <nav id="navigation" class="px-4 lg:px-6 py-9 navigation animate__animated animate__slideInDown">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" class="flex items-center">
                        <img src={MainLogo} class="mr-3 h-[50px] md:h-[70px] transition-all duration-700" alt="Flowbite Logo" />
                    </a>
                    <div class="flex items-center lg:order-2">
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-[#00416ac5] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <FaBars className="text-2xl text-white" />
                        </button>
                    </div>
                    <div className={` w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'flex visible justify-center items-center h-screen animate__animated animate__slideInDown' : 'hidden'}`}>
                        <div className="mt-[-200px] md:mt-0">
                            <div>
                                <img src={MainLogo} className={` ${isMenuOpen ? 'h-[80px]' : 'hidden'}`}/>
                            </div>
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0 text-center ">
                                <li>
                                    <a href="/" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaHouseChimney /></span>Home</a>
                                </li>
                                <li>
                                    <a href="#" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaCode /></span>Services</a>
                                </li>
                                <li>
                                    <a href="#" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaHive /></span>About</a>
                                </li>
                                <li>
                                    <a href="/letsConnect" class={`block py-2 pr-4 pl-3 tracking-wider headerButtons text-white transition-[1.6s] hover:scale-125 ${isMenuOpen ? 'text-2xl mt-5' : 'text-lg'}`}><span className="absolute mt-1 ml-[-35px]"><FaAngellist /></span>Contact</a>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header