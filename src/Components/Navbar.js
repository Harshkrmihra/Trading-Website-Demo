import { React, useState } from "react";

// import { IoMdClose } from "react-icons/io";
import Header from "./Header";


const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  function handleClick() {
    // console.log("clicked")
    setisopen((isopen) => !isopen);
  }

  return (
    <>
      <Header />
      <div className="top sticky max top-0 start-0  h-30  py-2 bg-color5 " style={{ zIndex: "149" }}>
        <div className="flex  sticky top-0 start-0 justify-between   mx-20 my-2 bg-inherit">
          <a href="/">
            <img
              src="./Logos/Main-Logo.png"
              alt=""
              className="h-img max-w-[30vh]"
            />
          </a>
          <div className=" hidden md:flex lg:flex xl:flex 2xl:flex items-center  ">
            <ul className=" hidden  lg:flex  gap-10 text-center ">
              <li>
                <a
                  className="links text-color11  text-[23px] font-semibold hover:font-semibold hover:no-underline  lg:hover:no-underline hover:text-color2 "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/product"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/fund"
                >
                  Funds
                </a>
              </li>

              
              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/price"
                >
                  Pricing
                </a>
              </li>
             
             
            </ul>
          </div>
          <button
            className=" flex  items-center    xl:hidden lg:hidden 2xl:hidden   "
            onClick={handleClick}
          >
                 <img src="./contact-icon/menu.ico" alt="no-icon" className="w-10 "/>

          </button>
        </div>






         {/* mobile-nav-container */}
      {isopen && (
        <div className="Mobilenav absolute bg-black/50 text-black w-[40vh] h-[100vh] p-10 backdrop-blur-md top-0   ">
          <div onClick={handleClick} className=" float-right  ">
           <img src="./contact-icon/cancel.ico" alt="no-icon" className="w-10"/>
          </div>

          <div className="">
          <a href="/">
            <img
              src="./Logos/Main-Logo.png"
              alt=""
              className="h-img max-w-[20vh]"
            />
          </a>
          </div>

          <div className=" mt-10 ">
            <ul className=" flex flex-col gap-4  ">
               <li>
                <a
                  className="links text-color11  text-[23px] font-semibold hover:font-semibold hover:no-underline  lg:hover:no-underline hover:text-color2 "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/product"
                >
                  Products
                </a>
              </li>

              <li >
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/fund"
                >
                  Funds
                </a>
              </li>

              
              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="links text-color11 text-[23px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-color2 "
                  href="/price"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <hr className=" mt-5 bg-black"/>
          <div className="flex gap-5 justify-center ">
          <div className="border-1 border-black rounded-xl p-2 ">
            <a href="/register"className="links text-color11 text-[20px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-blue-900 "
>Sign-Up</a>
             </div>
             <div className="border-1 border-black rounded-xl p-2 ">
            <a href="/register"className="links text-color11 text-[20px] font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline hover:text-blue-900 "
>Sign-In</a>
             </div>
             </div>

        </div>
      )}
      </div>
    </>
  );
};

export default Navbar;
