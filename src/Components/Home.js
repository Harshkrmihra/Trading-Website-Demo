import  {  React } from 'react'
import'./Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';

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
   <div className='home '>
    <div className='top '>
      <div className='h-img'>
        <img src='./Images/image1.png' alt='ni-image1'/>
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
        <div className='card  border-solid border-2 border-gray-400 p-10' style={{borderShadow:"inset 0 0 5px , inset 0 0 5px"}}>
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
  
     <Card style={{ width: '25rem',  height:'40rem'}}>
      <Card.Img variant="top" src="./Logos/Be a pro trader with this 7 key concepts.jpeg" />
      <Card.Body className='card1 bg-green-300'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='truncate  overflow-hidden'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        
       
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
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
      </div>
   </>
  )
}

export default Home
