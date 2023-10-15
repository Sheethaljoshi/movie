import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App (){
  return(
    <div className='text-white font-sans text-5xl'>
      <Router>
        <Routes>
        <Route index element={<h1>hello world</h1>}></Route>
                <Route path="movie/:id" element={<h1>movie detail</h1>}></Route>
                <Route path="movies/:type"element={<h1>movie list</h1>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
