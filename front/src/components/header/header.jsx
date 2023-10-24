
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative p-5 flex items-center justify-between md:px-10 z-10">
            <div className="flex items-center">
                <Link to="/">
                    <img className="w-32 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
                </Link>
            </div>

            <div className="hidden md:flex text-xl space-x-10 font-semibold">
                <Link to="/movies/popular" className="text-white hover:text-red-500 cursor-pointer">POPULAR</Link>
                <Link to="/movies/top_rated" className="text-white hover:text-red-500 cursor-pointer">TOP MOVIES</Link>
                <Link to="/movies/upcoming" className="text-white hover:text-red-500 cursor-pointer">UPCOMING</Link>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden relative z-20">
                <button onClick={toggleMenu} className="text-xl text-white cursor-pointer">
                    ☰
                </button>
                {isOpen && (
                    <div className="absolute top-16 right-0 mt-2 bg-black rounded-lg shadow-lg p-5 text-white">
                        <Link to="/movies/popular" className="block py-2 text-white hover:text-red-500 cursor-pointer">POPULAR</Link>
                        <Link to="/movies/top_rated" className="block py-2 text-white hover:text-red-500 cursor-pointer">TOP MOVIES</Link>
                        <Link to="/movies/upcoming" className="block py-2 text-white hover:text-red-500 cursor-pointer">UPCOMING</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
