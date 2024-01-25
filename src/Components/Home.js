import  {  React } from 'react'
import'./Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import Funds from './Funds';
import Investor from './Investor';

const Home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          
        }
      },
    
      
    ]
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

<div className='second-contain w-full bg-[#25BE9B] p-12 justify-center'>
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

      <div className=' full-container p-5'>
        <div className='blog-h  place-items-center'>
          <h1 className='service text-center '>Our Services</h1>
        </div>
        {/* ........cards....... */}
      <div class="grid grid-row-4 gap-12  lg:grid lg:grid-cols-4 lg:gap-4  ">
        <div className='card-1  border-solid border-2  shadow-inner shadow-[#25BE9B]  border-[#25BE9B]  '>
          <img src='./Images/our-service-1.png' alt='no-img' className='image h-[28vh] mx-auto my-3 lg:h-[30vh] lg:mx-10 lg:my-10 '/>
          <div className='t-1 text-sm mx-2 lg:py-5 '>
            <h1 className='hed text-lg: text-center lg:text-[3.6vh] lg:mb-5'>Discount Broking</h1>
            <p className='pr text-sm text-start m-1 lg:text-lg:'>Discount Broking is our primary product and what we specialise in.</p>
            <p className='lg:text-lg:'>Zero Brokerage Investments</p>
          </div>
        </div>

        <div className='card-2  border-solid border-2   shadow-inner shadow-[#25BE9B]  border-[#25BE9B]  '>
          <img src='./Images/our-service-2.png' alt='no-img' className='image h-[28vh] mx-auto my-4 lg:h-[30vh] lg:mx-10 lg:my-10'/>
          
          <div className='t-1 text-sm mx-2 lg:py-5 '>
            <h1 className='hed text-lg: text-center lg:text-[3.6vh] lg:mb-5'>Discount Broking</h1>
            <p className='pr text-sm text-start m-1 lg:text-lg:'>Discount Broking is our primary product and what we specialise in.</p>
            <p className='lg:text-lg:'>Zero Brokerage Investments</p>
          </div>
        </div>

        <div className='card-3  border-solid  border-2  shadow-inner shadow-[#25BE9B]  border-[#25BE9B] '>
          <img src='./Images/our-service-3.png' alt='no-img' className='image h-[28vh] mx-auto my-4 lg:h-[30vh] lg:mx-10 lg:my-10'/>
          <div className='t-1 text-sm mx-2 lg:py-5 '>
            <h1 className='hed text-lg: text-center lg:text-[3.6vh] lg:mb-5'>Discount Broking</h1>
            <p className='pr text-sm text-start m-1 lg:text-lg:'>Discount Broking is our primary product and what we specialise in.</p>
            <p className='lg:text-lg:'>Zero Brokerage Investments</p>
          </div>
        </div>

          <div className='card-4  border-solid  border-2  shadow-inner shadow-[#25BE9B]  border-[#25BE9B] '>
          <img src='./Images/our-service-4.png' alt='no-img' className='image h-[28vh] mx-auto my-4 lg:h-[30vh] lg:mx-10 lg:my-10'/>
          <div className='t-1 text-sm mx-2 lg:py-5 '>
            <h1 className='hed text-lg: text-center lg:text-[3.6vh] lg:mb-5'>Discount Broking</h1>
            <p className='pr text-sm text-start m-1 lg:text-lg:'>Discount Broking is our primary product and what we specialise in.</p>
            <p className='lg:text-lg:'>Zero Brokerage Investments</p>
          </div>
        </div>
      </div>
      </div>


            {/* ------------------Our Blog--------------------- */}

     <div className='container-f bg-white '>
    <div className='our-blog'>
      <h1 className='blog-h text-center '> Our Blog</h1>
    </div>
      <div className='container max-w-[100%] '>
 <Slider {...settings} className='slide '>
  
     <Card className='s-card-1 border-1 shadow-xl '  >
      <Card.Img variant="top" src="./Logos/blog.png" alt='no-img' />
      <Card.Body className='card1 bg-[#a1e7d6] '>
        <Card.Title >
         <h4 className='h-c text-gray-600 lg:text-3lg:'  >What is a Stock Split, how does it work, and its advantages
        </h4>
        </Card.Title>
        <Card.Text className='t border-t-2 border-gray-700 '>
          <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
        </Card.Text>
      </Card.Body>
    </Card>

         
     <Card className='s-card-2 border-1 shadow-xl '  >
      <Card.Img variant="top" src="./Logos/blog-2.png" alt='no' />
      <Card.Body className='card1 bg-[#a1e7d6] '>
        <Card.Title >
         <h4 className='h-c text-gray-600 lg:text-3lg:'  >What is a Stock Split, how does it work, and its advantages
        </h4>
        </Card.Title>
        <Card.Text className='t border-t-2 border-gray-700 '>
          <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
        </Card.Text>
      </Card.Body>
    </Card>

         
     <Card className='s-card-3 border-1 shadow-xl '  >
      <Card.Img variant="top" src="./Logos/Be a pro trader with this 7 key concepts.jpeg" />
      <Card.Body className='card1 bg-[#a1e7d6] '>
        <Card.Title >
         <h4 className='h-c text-gray-600 lg:text-3lg:'  >What is a Stock Split, how does it work, and its advantages
        </h4>
        </Card.Title>
        <Card.Text className='t border-t-2 border-gray-700 '>
          <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
        </Card.Text>
      </Card.Body>
    </Card>
        
          
     <Card className='s-card-4 border-1 shadow-xl '  >
      <Card.Img variant="top" src="./Logos/Be a pro trader with this 7 key concepts.jpeg" />
      <Card.Body className='card1 bg-[#a1e7d6] '>
        <Card.Title >
         <h4 className='h-c text-gray-600 lg:text-3lg:'  >What is a Stock Split, how does it work, and its advantages
        </h4>
        </Card.Title>
        <Card.Text className='t border-t-2 border-gray-700 '>
          <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
        </Card.Text>
      </Card.Body>
    </Card>
         
        </Slider>
        </div>
      </div>

      <div className='my-10'>
        <Investor/>
      </div>
      </div>
   </>
  )
}

export default Home
