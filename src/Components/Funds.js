import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Funds = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  return (
    <>
   <div className='container-f bg-black'>
    <div className='our-blog'>
      <h1> Our Blog</h1>
    </div>
      <div className='all-Cards w-2/3 p-5 m-6  '>
 <Slider {...settings} className='slide '>
  
          <div className='cart-1'>
            <img src='./Logos/Be a pro trader with this 7 key concepts.jpeg' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>

          <div className='cart-2'>
            <img src='./Logos/11.jpg' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>

          <div className='cart-3'>
            <img src='./Logos/Our-Blog-3.jpg' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>
        
          <div className='cart-4'>
            <img src='./Logos/Our-Blog-4.png' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>
         
        </Slider>
        </div>
      </div>

   
    </>
  )
}

export default Funds
