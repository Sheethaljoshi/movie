import React from "react";
import './home.css';

const Home = () => {
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d0fcab767b66b6decb3c8697e6f06c66&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
        Home Page is now rendered
        </>
    );
}
export default Home;
