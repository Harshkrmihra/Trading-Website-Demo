import { React, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineMenuOpen } from "react-icons/md";
// import { IoMdClose } from "react-icons/io";
import Header from "./Header";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header/>
    <div className="sticky top-0 start-0  py-2 bg-black  shadow-inner  shadow-slate-300 ">
      <div className="flex sticky top-0 start-0 justify-between items-cente   mx-10 bg-black "> 
        <a href="/">
        <img src="./Logos/Main-Logo.png" alt="" className="h-img max-w-[30vh]" />
        </a>
        <div className="hidden md:flex lg:flex xl:flex 2xl:flex items-center ">
          <ul className="flex gap-10 text-center ">
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/product"
              >
                Products
              </a>
            </li>
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/price"
              >
                Pricing
              </a>
            </li>
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/fund"
              >
                Funds
              </a>
            </li>
            <li>
            <a
                className="links  text-red-500 font-semibold hover:font-semibold hover:no-underline   lg:hover:no-underline lg:hover:text-white "
                href="/courese"
              >
                Courses
              </a>
            </li>
          </ul>
        </div>
        <button
          className=" flex md:hidden   xl:hidden lg:hidden 2xl:hidden text-[6vh] "
          onClick={handleShow}
        >
          <MdOutlineMenuOpen className="text-red-700 my-auto" />
        </button>
      </div>
      <Offcanvas  show={show} onHide={handleClose} className="" >
        <Offcanvas.Header closeButton  >
          
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="off-list">
            <li >
              <a
                className="links text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold  lg:hover:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="links  text-black font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                Navbars
              </a>
            </li>
            <li>
              <a
                className="links ho text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="links  text-black font-semibold hover:font-semibold hover:no-underline   lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                Funds
              </a>
            </li>
            <li>
              <a
                className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
                href="/"
              >
                Course
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
};

export default Navbar;
