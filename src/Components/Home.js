import { React } from 'react'
import './Home.css'
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
      <div className='home bg-gray-100'>
        <div className='top '>
          <div className='h-img'>
            <img src='./Images/image1.png' alt='ni-image1' />
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
        <div className='bg-gray-100'>
          <div class="max-w-[100] mx-auto">
            <div class="text-center uppercase py-8">
              <h2 class="f-26">Our Services</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">

              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://i.ibb.co/N97PXXy/img1.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://i.ibb.co/Js2jMzn/img2.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://i.ibb.co/j3RRxPg/img3.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>


              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src="https://i.ibb.co/89qhz7V/img4.png" alt="" className="s-img max-w-[50%] mx-auto" />
                <h2 className="f-22 font-semibold mb-4 mt-8">Discount Broking</h2>
                <p className="text-gray-600 pb-4">Discount Broking is our primary product and what we specialise in.</p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
            </div>
          </div>
        </div>


        {/* ------------------Our Blog--------------------- */}

        <div className='container-f bg-white '>
          <div className='our-blog'>
            <h1 className='blog-h text-center '> Our Blog</h1>
          </div>
          <div className='all-Cards md:p-20 md:my-20'>
            <Slider {...settings} className='slide '>

              <Card className='s-card-1 border-1 shadow-xl my-5'  >
                <Card.Img variant="top" src="./Logos/blog.png" alt='no-img' />
                <Card.Body className='card1 bg-[#a1e7d6] '>
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
                <Card.Body className='card1 bg-[#a1e7d6] '>
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
                <Card.Body className='card1 bg-[#a1e7d6] '>
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
                <Card.Body className='card1 bg-[#a1e7d6] '>
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
      </div>
    </>
  )
}

export default Home
