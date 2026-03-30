import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Links = (
        <>
            <li className="text-xl">
                <Link
                    to="/"
                    className="relative group transition duration-300"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="text-xl">
                <Link
                    to="/about"
                    className="relative group transition duration-300"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="text-xl">
                <Link
                    to="/projects"
                    className="relative group transition duration-300"
                    onClick={() => setMenuOpen(false)}
                >
                    My Projects
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
            <li className="text-xl">
                <Link
                    to="/contact"
                    className="relative group transition duration-300"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact Me
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </li>
        </>
    );

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-indigo-500 to-pink-500 border-b-4 border-b-indigo-500">
            <div className="flex justify-between items-center lg:px-[150px] px-5 py-4">
                {/* Logo */}
                <Link to="/" className="text-white font-medium text-3xl">
                    <span className="text-pink-300">SK</span> Pathim Hossain
                </Link>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu for Large Screens */}
                <ul className="hidden lg:flex space-x-8 text-white font-semibold">
                    {Links}
                </ul>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <ul className="lg:hidden bg-indigo-600/95 text-white flex flex-col items-start px-5 py-2 space-y-3">
                    {Links}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;