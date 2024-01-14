import  {  React } from 'react'
import'./Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
 
  return (
   <>
    <div className='HomePage static'>
     <div className='main-img  mx-auto'>
    <img src='./Images/image1.png' alt='no-imag' className=' '/>
     </div>
     <div className='tital absolute  bottom-50 left-1/3 pt-5 '>
      <h1 className=' text text-7xl' >TradingBells</h1>
      <p className=' text text-3xl'>Online Share & Commodity Broker</p>
     </div>

     <div className='text-box absolute  bottom-72 left-96  w-1/2 ml-18 '>
      <input type='text' placeholder='Enter A Number' className='inpt p-3 rounded-l-full w-2/3 '/>
      <button className='btnt bg-green-500 p-3  rounded-r-full  w-40' >Get A Call</button>
     </div>
   </div>
           {/* --------------------------second-Part------------------- */}

<div className='second-contain w-full bg-green-400 p-12 justify-center'>
  <div className='part-1 pt-5'>
    <h1 className='part-1 font-bold text-white text-3xl text-center '>Why pay more for services that you don't avail?</h1>
  </div>
  <div className='second '>
    <div className='part-2'>
      <img src='./Logos/$200.png' alt='no-200' className='imgt w-50 ' />
    </div>
    <div className='part-3'></div>
    <div>
     
    </div>
  </div>

</div>

      
            {/* ------------------Our Service--------------------- */}

      <div className=' full-container p-5 '>
        <div className='blog-h  place-items-center'>
          <h1 className='service text-center '>Our Services</h1>
        </div>
      <div class="grid grid-cols-4 gap-12 pl-28 pr-28 pt-10">
        <div className='card border-solid border-2 border-gray-400 p-10'>
          <img src='./Images/our-service-1.png' alt='no-img'/>
          <div className='t-1'>
            <h1>Discount Broking</h1>
            <p>Discount Broking is our primary product and what we specialise in.</p>
            <p>Zero Brokerage Investments</p>
          </div>
        </div>
        <div className='card border-solid border-2 border-gray-400 p-10 shadow-inner '>
          <img src='./Images/our-service-2.png' alt='no-img'/>
          <div className='t-1'>
            <h1>Discount Broking</h1>
            <p>Discount Broking is our primary product and what we specialise in.</p>
            <p>Zero Brokerage Investments</p>
          </div>
        </div>
        <div className='card border-solid border-2 border-gray-400 p-10'>
          <img src='./Images/our-service-3.png' alt='no-img'/>
          <div className='t-1'>
            <h1>Discount Broking</h1>
            <p>Discount Broking is our primary product and what we specialise in.</p>
            <p>Zero Brokerage Investments</p>
          </div>
        </div>
        <div className='card border-solid border-2 border-gray-400 p-10'>
          <img src='./Images/our-service-4.png' alt='no-img'/>
          <div className='t-1'>
            <h1>Discount Broking</h1>
            <p>Discount Broking is our primary product and what we specialise in.</p>
            <p>Zero Brokerage Investments</p>
          </div>
        </div>
      </div>
      </div>


            {/* ------------------Our Blog--------------------- */}

     <div className='container-f bg-white '>
    <div className='our-blog'>
      <h1 className='blog-h text-center '> Our Blog</h1>
    </div>
      <div className='all-Cards  p-5 ml-32 mr-32'>
 <Slider {...settings} className='slide '>
  
          <div className='cart '>
            <img src='./Logos/Be a pro trader with this 7 key concepts.jpeg' alt='no-one' />
            <div className='one pt-5 pb-5 pr-3 pl-3'>
              <h3>
            <a href="https://tradingbells.com/article/what-is-derivative-trading-understanding-types-advantages-disadvantages" data-original-title title className='h-link'> What is Derivative trading?  Understanding: Types, Advantages & Disadvantages</a>
            </h3>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>

          <div className='cart'>
            <img src='./Logos/11.jpg' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>

          <div className='cart '>
            <img src='./Logos/Our-Blog-3.jpg' alt='no-one'/>
            <div className='one'>
              <a href='/'>7 Key Concepts That Will Elevate Your Skills and Make You a Better Trader</a>
            </div>
            <div>
              <p>"Learn about the 7 key concepts to master trading strategies and tactics. Dive into essential principles that go beyond the basics, providing valuable insights to enhance your trading strategies. "</p>
            </div>
          </div>
        
          <div className='cart'>
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

export default Home
