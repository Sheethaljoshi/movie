import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Home from './components/pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './components/pages/home/movieDetail/movie';
function App (){
  return(
    <div className= 'text-white font-sans'>
      <Router>
      <Header />
        <Routes>
        <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type"element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
