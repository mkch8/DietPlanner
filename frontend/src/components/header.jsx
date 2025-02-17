import React, { useState } from "react";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        DietPlanner
                        </span>
                    </a>
                    <div>
                        <ul className="flex flex-row md:flex-row md:gap-8 gap-0">
                            <li>
                                <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                About
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                Sign In
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header;