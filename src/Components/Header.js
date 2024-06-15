import React from 'react'
// import { NavLink } from 'react-bootstrap'

const Header = () => {
  return (
   <>
     <div className="topNavbar hidden  md:h-14 md:items-center md:flex md:justify-end bg-color2 opacity-95 Md:max-h-24 md:space-x-4 md:p-7 ">
        <div className="top flex text-black  ">
        <ul className="flex gap-10 text-center   " >
              <li>
                <a
                  className="links  text-black  hover:te hover:font-semibold   "
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="links  text-black  hover:font-semibold"
                  href="/help"
                >
                  Help Desk
                </a>
              </li>
              <li>
                <a
                  className="links  text-black  hover:font-semibold "
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
              </ul>
          <div className="vr h-10 text-center  ml-5" />
        </div>
        <div className="top-socialIcon flex space-x-4 place-items-center  ">
          <img
            src="./Logos/facebook.png"
            alt="facebook"
            className="icon  h-4"
          />
          <img
            src="./Logos/instagram.png"
            alt="instagram"
            className="icon  h-4"
          />
          <img src="./Logos/twitter.png" alt="twitter" className="icon  h-4" />
          <img
            src="./Logos/linkedin.png"
            alt="linkedin"
            className="icon  h-4"
          />
        </div>
      </div>

   </>
  )
}

export default Header
