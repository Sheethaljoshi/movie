import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div className="mt-5 ml-5 2.5rem p-0.5rem flex items-center justify-between">
            <div className="flex items-center justify-between">
            <Link to ="/"><img className="w-32 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
            </div>
            <div className="flex mr-6 text-lg space-x-20">
            <Link to ="/movies/popular" className="text-white hover:text-red-500 cursor-pointer"><span>Popular</span></Link>
            <Link to ="/movies/toprated"className="text-white hover:text-red-500 cursor-pointer" ><span>Top Rated</span></Link>
            <Link to ="/movies/upcoming" className="text-white hover:text-red-500 cursor-pointer"><span>Upcoming</span></Link>
            </div>
            
        </div>

    );
}
export default Header;