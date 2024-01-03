import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";

// import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import Myform from "./Myform";


// import { GoBell } from "react-icons/go";


const Navbar = () => {

 const [showForm, setShowForm]= useState(false);
 
 const closeForm = () => setShowForm(false);

  return (
    <>
      <div className="topHeaderWrapper flex justify-end  ">
        <div className="topHeader flex  w-1/3 ">
          <a href="/blog" >Blogs</a>
          <a href="/career">Career</a>
          <a href="/blog">Help Desk</a>
          <a href="/blog">Contact Us</a>
           <div className="socialLink flex justify-end">
           <img src="./Logos/facebook.png" alt="facebook"/>
           <img src="./Logos/instagram.png" alt="instagram"/>
           <img src="./Logos/linkedin.png" alt="linkedin" style={{height:"24px"}}/>
           <img src="./Logos/twitter.png" alt="" style={{height:"24px"}}/>
           </div>
        </div>
      </div>
        
    {/* ------------- main navigation--------------- */}

    <nav className="main-nav">
      <div className="logo">
      <Image style={{height:"30%", marginTop:"2rem", objectFit:"contain"}} src="./Images/logo.png"  alt="no image"/>
    </div>

      <div className="account">
        <div className="box">
        <i class="fa-sharp fa-solid fa-bell fa-shake" style={{color: "white", background:"none",fontSize:"1.2rem", marginTop:"30%", marginLeft:"30%"}} />
        </div>
        <button className="openaccount "  onClick={() => setShowForm(true)}>open an account</button>
        {showForm && <Myform closeForm ={closeForm}/>}     
        </div>
  

    <div className="menu-link">
  <div className="menu">
  <NavLink to="/">Home</NavLink>
   <NavLink to="/product">Product</NavLink>
   <NavLink to="/price">Pricing</NavLink>
   <NavLink to="/about"> About Us</NavLink>
   <NavLink to="/fund" >Funds</NavLink>
   <NavLink to="/course">Course</NavLink>
  </div>
 </div>
 <div className="button">
 <a class=" signInButton" href="https://ttweb.indiainfoline.com/Trade/Login.aspx" target="blank" data-original-title title>Sign In</a>
 </div>
    </nav>
    </>
  );
};

export default Navbar;
