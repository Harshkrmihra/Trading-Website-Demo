import React, { useState } from 'react'
import { useEffect } from 'react';
import SignupForm from './SignupForm';

const Home2 = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("animated-div2");
            const position = element.getBoundingClientRect();
  
            // Checking whether fully visible
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                setAnimate(true);
            } else {
                setAnimate(false);
            }
        };
  
        window.addEventListener("scroll", handleScroll);
  
        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array to run effect only once on component mount
  
  
  
  
  


  return (
   <>

<div className=" home-2 container-fluid  md:max-h[100vh] xl:max-h-[100vh] 2xl:max-h-[100vh] bg-gradient-to-br from-color3 via-color1 to-color6 justify-center">
          <div  id="animated-div2" className={`home-p pt-5 items-center  ${animate ? 'animate-fade-right' : ''}`}  >
            <h1 className="part-1 font-bold text-black text-xl xl:text-5xl text-center ">
              Why pay more for services that you don't avail?
            </h1>
          </div>
          <div id='animated-div2' className={`home-p pt-2 flex flex-wrap items-center  ${animate ? 'animate-fade-right  animate-ease-in-out'  : ''} second overflow-hidden grid grid-cols-1 md:grid-cols-1 md:items-center md:justify-center lg:grid-cols-2 xl:gap-48 items-center justify-center`}>
            <div >
              <img
                src="./contact-icon/team.gif"
                alt="no-200"
                className="imgt w-68 "
              />
            </div>
            <div className="z-20">
                <SignupForm/>
            </div>
            
          </div>
        </div>

</>
  )
}

export default Home2
