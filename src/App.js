import Home from './components/sections/Home'; 
import About  from './components/sections/About'; 
import Movies from './components/sections/Movies'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';  
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter> 
   <Navbar/>
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/> 
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
