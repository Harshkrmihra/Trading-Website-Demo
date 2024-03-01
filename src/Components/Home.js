import { React } from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import Investor from './Investor';
import Contactinformation from './Contactinformation';
// import RegistrationForm from './RegistrationForm';


const Home = () => {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img  src="./Logos/right-arrow.png" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="./Logos/left-arrow.png" alt="nextArrow" {...props} />
  );
    

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='home bg-gray-100'>
        <div className='top '>
          <div className='img-g '>
            <img src='./Logos/investing.jpg' alt='ni-image1' className='w-100 ' />
          </div>
        </div>

        {/* --------------------------second-Part------------------- */}

        

        <div className='container-fluid  md:max-h[100vh] xl:max-h-[100vh] 2xl:max-h-[100vh] bg-black justify-center'>
          <div className='part-1 pt-5 '>
            <h1 className='part-1 font-bold text-white text-xl xl:text-3xl text-center '>Why pay more for services that you don't avail?</h1>
          </div>
          <div className='second overflow-hidden grid grid-cols-1 md:grid-cols-1 md:items-center md:justify-center lg:grid-cols-2 xl:gap-48 items-center justify-center'>
            <div className='part-2  items-center  '>
              <img src='./Logos/$200.png' alt='no-200' className='imgt w-68 ' />
            </div>
            <div className='flex'>
            <div className="Login-form w-100 h-[60vh] backdrop-blur-md bg-white/20 border-1 border-white  rounded  p-8 m-4 md:max-w-md md:mx-auto ">
      <span className="block w-full text-2xl text-center uppercase font-extrabold mb-4   bg-gradient-to-t to-green-400 from-red-600  text-transparent bg-clip-text">Login</span>      
        <form className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label for="email" className="block text-lg text-red-500 font-bold mb-1">Username or Email</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div className="mb-6 md:w-full">
            <label for="password" className="block text-lg text-red-500 font-bold mb-1">Password</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <button className="bg-green-500  hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
        <a className="text-red-700 text-center font-semibold text-md" href="/login">Forgot password?</a>
    </div>
    </div>
            <div>

            </div>
          </div>

        </div>


        {/* ------------------Our Service--------------------- */}
        <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
          <div className="max-w-[100] mx-auto">
            <div className="text-center text-white font-bold uppercase py-8">
              <h2 className="f-26">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-12 xl:gap-8 p-16">

              <div className="s-cart bg-white p-6 rounded-lg text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src="https://i.ibb.co/N97PXXy/img1.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
              <div className="s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src="https://i.ibb.co/Js2jMzn/img2.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>

              <div className=" s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src="https://i.ibb.co/j3RRxPg/img3.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>


              <div className=" s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src="https://i.ibb.co/89qhz7V/img4.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
            </div>
          </div>
        </div>


        {/* ------------------Our Blog--------------------- */}

        <div className= 'container-fluid py-1 bg-gradient-to-r from-slate-900 to-slate-700  ' >
          <div>
            <h1 className='blog-h text-center text-white my-10'> Our Blog</h1>
          </div>
          <div className='all-Cards   w-[80%] mx-[10%] my-10'>
            <Slider {...settings} className='slide '>

              <Card className='s-card-1 border-1 shadow-xl my-5'  >
                <Card.Img variant="top" src="./Logos/blog.png" alt='no-img' />
                <Card.Body className='card1  bg-sky-100'>
                  <Card.Title >
                    <h4 className='h-c text-gray-600 md:text-3lg'  >What is a Stock Split, how does it work, and its advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className='t border-t-2 border-gray-700 '>
                    <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
                  </Card.Text>
                </Card.Body>
              </Card>


              <Card className='s-card-2 border-1 shadow-xl my-5'  >
                <Card.Img variant="top" src="./Logos/blog-2.png" alt='no-img' />
                <Card.Body className='card1  bg-sky-100'>
                  <Card.Title >
                    <h4 className='h-c text-gray-600 md:text-3lg'  >What is a Stock Split, how does it work, and its advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className='t border-t-2 border-gray-700 '>
                    <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
                  </Card.Text>
                </Card.Body>
              </Card>


              <Card className='s-card-2 border-1 shadow-xl my-5'  >
                <Card.Img variant="top" src="./Logos/Be a pro trader with this 7 key concepts.jpeg" />
                <Card.Body className='card1 bg-sky-100 '>
                  <Card.Title >
                    <h4 className='h-c text-gray-600 md:text-3lg'  >What is a Stock Split, how does it work, and its advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className='t border-t-2 border-gray-700 '>
                    <p className='pr my-3'>Discover the ins and outs of stock splits, including how they work and their potential advantages. Learn how this corporate action can impact investors and stock price</p>
                  </Card.Text>
                </Card.Body>
              </Card>


              <Card className='s-card-4 border-1 shadow-xl my-5'  >
                <Card.Img variant="top" src="./Logos/Be a pro trader with this 7 key concepts.jpeg" />
                <Card.Body className='card1  bg-sky-100'>
                  <Card.Title >
                    <h4 className='h-c text-gray-600 md:text-3lg'  >What is a Stock Split, how does it work, and its advantages
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

        
        {/* <RegistrationForm/> */}
          <Investor/>
        <Contactinformation/>
      </div>
    </>
  )
}

export default Home
