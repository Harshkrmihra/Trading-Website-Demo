// Header.js
import { React, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define a function that toggles the menu status
  function onToggleMenu() {
    setMenuOpen(!menuOpen);
    // Select the navigation links element
    const navigationLinks = document.querySelector(".navLinks");
    // Check if the element exists
    if (navigationLinks) {
      // Toggle the top position of the element
      navigationLinks.classList.toggle("top-[9%]");
    }
  }

  return (
    <>
      <header className="head bg-white md:h-24 md:border-t-2 md:border-gray-300">
        <nav className="navi flex justify-between items-center  ">
          <div className="toggle-menu ml-5">
            {menuOpen ? (
              <CgClose
                className="close static text-2xl cursor-pointer md:hidden"
                onClick={onToggleMenu}
              />
            ) : (
              <CgMenu
                className="menu  text-2xl cursor-pointer md:hidden"
                onClick={onToggleMenu}
              />
            )}
          </div>
          <div className="t  md:ml-14 py-2">
            <img
              src="./Images/logo.png"
              alt=""
              className="h-img w-[40%]  bg-transparent md:h-img md:w-[55%]  md:bg-transparent"
            />
          </div>

          <div className="navLinks py-5 px-5  bg-white md:static  absolute md:h-5 min-h-[60%] md:flex left-0 top-[-100%] w-full md:justify-end md:items-center   md:px-5 transition-top duration-0 ease-in-out">
            <ul className="list flex  md:flex-row flex-col md:items-center md:gap-8 gap-8 ">
              <li >
                <a className="links text-black font-semibold hover:font-semibold hover:no-underline  md:text-black md:font-semibold  md:hover:font-semibold  md:hover:no-underline md:hover:text-green-400 " href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="links  text-black font-semibold hover:no-underline  md:text-black md:font-semibold   md:hover:no-underline md:hover:text-green-400 " href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="links ho text-black font-semibold hover:font-semibold hover:no-underline  md:text-black md:font-semibold   md:hover:no-underline md:hover:text-green-400 " href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className="links  text-black font-semibold hover:font-semibold hover:no-underline  md:text-black md:font-semibold   md:hover:no-underline md:hover:text-green-400 " href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="links  text-black font-semibold hover:font-semibold hover:no-underline   md:text-black md:font-semibold  md:hover:no-underline md:hover:text-green-400 " href="/">
                  Funds
                </a>
              </li>
              <li>
                <a className="links  text-black font-semibold hover:font-semibold hover:no-underline  md:text-black md:font-semibold  md:hover:no-underline md:hover:text-green-400 " href="/">
                  Course
                </a>
              </li>
            </ul>
            <div className="sign-button  md:ml-9"> 
            <button class=" border-2 md:mt-20 border-[#25BE9B] rounded-tr-full rounded-b-full  px-5 py-3    hover:text-[#25BE9B]  font-sans md:bg-white md:text-lg font-medium  md:border-2 md:border-[#25BE9B] md:hover:text-[#25BE9B] md:rounded-tr-full md:rounded-b-full  md:px-4 md:py-3   md:font-sans md:text-lg md:font-medium md:mb-20">Sign In</button>
            </div>
          </div>
          
        </nav>
      </header>
    </>
  );
};
export default Navbar 
