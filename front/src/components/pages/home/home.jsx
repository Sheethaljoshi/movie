// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../movieList/movieList";


const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            // eslint-disable-next-line react/jsx-key
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="h-100">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="mx-auto block w-full"/>
                                </div>
                                <div className="absolute p-20 bottom-0 h-70 flex flex-col w-full justify-end items-start bg-gradient-to-t from-black via-transparent to-transparent opacity-100 transition-opacity duration-300 hover:opacity-100">
                                    <div className="font-bold text-5xl mb-1 text-left">{movie ? movie.original_title: ""}</div>
                                    <div className="text-md mb-2">
                                        {movie ? movie.release_date : ""}
                                        <span className="ml-7">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="italic text-sm mb-1 flex items-start text-left w-1/2">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home
