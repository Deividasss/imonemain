import "../Homepage/Homepage.scss"

const Header = () => {
    return (
        <header className="fixed w-[100%]">
            <nav class="px-4 lg:px-6 py-9">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center lg:order-2">

                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 tracking-wider HeaderButtons text-white hover:scale-125">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white tracking-wider HeaderButtons hover:scale-125">Company</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white tracking-wider HeaderButtons hover:scale-125">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white tracking-wider HeaderButtons hover:scale-125">Features</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white tracking-wider HeaderButtons hover:scale-125">Team</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white tracking-wider HeaderButtons hover:scale-125">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header