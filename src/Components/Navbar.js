import React from "react";
// import "./Navbar.css"

const Navbar = () => {
  return (
    <>
     

           {/* ----------------main Navigation---------------- */}


      <div className="Top-Header flex bg-white max-h-24 space-x-4 p-2 place-items-center h-28 shadow-inner">
        <div>
          <img src="./Images/logo.png" alt="logo-t" className=" logo h-12" />
        </div>

<div className="open-account border-solidb border-4 max-w-60">
  </div>        
          <div className="header-link  space-x-4 text-lg  ">
            <a href="/"  className="link-1 text-slate-950  font-medium  hover:text-green-400 hover:no-underline">Home</a>
            <a href="/" className="link-1  text-slate-950 font-medium hover:text-green-400 hover:no-underline">Product</a>
            <a href="/" className="link-1  text-slate-950 font-medium  hover:text-green-400 hover:no-underline">Price</a>
            <a href="/" className="link-1  text-slate-950 font-medium  hover:text-green-400 hover:no-underline">About Us</a>
            <a href="fund" className="link-1  text-slate-950 font-medium  hover:text-green-400 hover:no-underline">Funds</a>
            <a href="/" className="link-1  text-slate-950 font-medium  hover:text-green-400 hover:no-underline">Cources</a>
          </div>
        
        <div className=" border-solid  border-green-500 border-2 pl-8 pt-3 pr-8 pb-3 rounded-b-full rounded-tr-full">
          <a href="/" className="link-1  text-slate-950 font-medium ">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
