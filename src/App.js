
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
// import Product from './Components/Product';
// import About from './Components/About';
// import Pricing from './Components/Pricing';
import Funds from './Components/Funds';
// import Course from './Components/Course';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import Header from './Components/Header';






function App() {

  return (
    <> 
    <Header/>
  <Navbar/>
  <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/fund' element={<Funds/>}></Route>
  {/* <Route path='/product' element={<Product/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/price' element={<Pricing/>}></Route>

  <Route path='/course' element={<Course/>}></Route> */}
 
  </Routes>
  <Footer/>
 
    </> 
 );
}

export default App;
