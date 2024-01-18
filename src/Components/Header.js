import React from 'react'
import { NavLink } from 'react-bootstrap'

const Header = () => {
  return (
   <>
     <div className="topNavbar hidden md:h-14 md:place-items-center md:flex md:justify-end md:bg-slate-50 Md:max-h-24 md:space-x-4 md:p-2 ">
        <div className="top flex ">
          <NavLink to="/" ClassName="top-link ">
            Blog
          </NavLink>
          <div className="vr h-7  mt-2" />

          <NavLink to="/" ClassName="top-link">
            Help Desk
          </NavLink>
          <div className="vr h-7  mt-2 " />
          <NavLink to="/" ClassName="top-link">
            Contact us
          </NavLink>
          <div className="vr h-7  mt-2" />
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
