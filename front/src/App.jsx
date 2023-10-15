import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Home from './components/pages/home/home';
function App (){
  return(
    <div className= 'text-white font-sans'>
      <Router>
      <Header />
        <Routes>
        <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<h1>movie details</h1>}></Route>
                <Route path="movies/:type"element={<h1>movie list</h1>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
