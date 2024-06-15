
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Funds from './Components/Funds';
import Course from './Components/Course';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import HelpDesk from './Components/HelpDesk';
import Contect from './Components/Contect';
function App() {
  return (
    <>
      {/* <!-- Navbar component goes here --> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fund" element={<Funds />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Pricing />} />
        <Route path='contact' element={<Contect />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpDesk />} />

      </Routes>
      {/* <!-- Footer component goes here --> */}
      <Footer />
    </>
  );
}


export default App;
