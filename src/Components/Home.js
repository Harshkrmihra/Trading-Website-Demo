import { React, useEffect, useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Investor from "./Investor";
import Contactinformation from "./Contactinformation";
import Home2 from "./Home2";
// import RegistrationForm from './RegistrationForm';

const Home = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const element = document.getElementById("animated-div");
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




  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src="./contact-icon/forward.png"  alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="./contact-icon/back.png"  alt="nextArrow" {...props} />
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
      <div className="home ">
        <div className="hom ">
          <img src="./contact-icon/photo.jpeg" alt="no" className="" />
          <div className="absolute bg-inherit   top-[15vh] left-[10vh] lg:top-[30vh] lg:left-[30vh] md:top-[20vh] md:left-[5vh] ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-color11 to-color7 text-[6vh] lg:text-[15vh] md:text-[7.5vh] md:tracking-wider lg:tracking-widest uppercase font-bold">
              Investing axis
            </h1>
            <div className=" md:py-5 ">
              <label
                class="home-search  bg-color2 min-w-sm max-w-xl hidden md:flex flex-col  md:flex-row items-start justify-start border py- px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="Get A Call"
                  class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-inherit"
                />
                <button class="w-full md:w-auto px-6 py-3 bg-color9 border-black text-color3 fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                  <div class="relative">
                    {/* <!-- Loading animation change opacity to display --> */}
                    <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                      <svg
                        class="opacity-0 animate-spin w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>

                    <div class="flex items-center transition-all opacity-1 valid:">
                      <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto uppercase">
                        get into touch
                      </span>
                    </div>
                  </div>
                </button>
              </label>
            </div>
            <div id="animated-div" className={`home-p w-[50%] py-5 ${animate ? 'animate-fade-up' : ''}`}>
            <p className="md:text-[09vh]">
                Investment For The Future And To The Moon
            </p>
        </div>
          </div>
        </div>

        {/* --------------------------second-Part------------------- */}

       <Home2/>

        {/* ------------------Our Service--------------------- */}
        <div className="home-service bg-gradient-to-r from-color5 to-color9 ">
          <div className="max-w-[100] mx-auto">
            <div className="text-center text-black font-bold uppercase py-8">
              <h2 className="f-26">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-12 xl:gap-8 p-16">
              <div className="s-cart bg-white p-6 rounded-lg text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                  src="https://i.ibb.co/N97PXXy/img1.png"
                  alt=""
                  className="s-img max-w-[50%] mx-auto"
                />
                <h2 className="f-22 font-semibold mb-4 mt-8">
                  Discount Broking
                </h2>
                <p className="text-gray-600 pb-4">
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
              <div className="s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                  src="https://i.ibb.co/Js2jMzn/img2.png"
                  alt=""
                  className="s-img max-w-[50%] mx-auto"
                />
                <h2 className="f-22 font-semibold mb-4 mt-8">
                  Discount Broking
                </h2>
                <p className="text-gray-600 pb-4">
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>

              <div className=" s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                  src="https://i.ibb.co/j3RRxPg/img3.png"
                  alt=""
                  className="s-img max-w-[50%] mx-auto"
                />
                <h2 className="f-22 font-semibold mb-4 mt-8">
                  Discount Broking
                </h2>
                <p className="text-gray-600 pb-4">
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>

              <div className=" s-cart bg-white p-6 rounded-lg shadow-xl shadow-lime-300  text-center hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img
                  src="https://i.ibb.co/89qhz7V/img4.png"
                  alt=""
                  className="s-img max-w-[50%] mx-auto"
                />
                <h2 className="f-22 font-semibold mb-4 mt-8">
                  Discount Broking
                </h2>
                <p className="text-gray-600 pb-4">
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p className="text-gray-600 pb-4">Zero Brokerage Investments</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------Our Blog--------------------- */}

        <div className="container-fluid py-1 bg-gradient-to-b from-color3 to-color6 ">
          <div>
            <h1 className="blog-h text-center text-black font-bold uppercase py-8"> Our Blog</h1>
          </div>
          <div className="all-Cards   w-[80%] mx-[10%] my-10 ">
            <Slider {...settings} className="slide ">
              <Card className="s-card-1 border-1 shadow-xl my-5">
                <Card.Img variant="top" src="./Logos/blog.png" alt="no-img" />
                <Card.Body className="card1  bg-sky-100">
                  <Card.Title>
                    <h4 className="h-c text-gray-600 md:text-3lg">
                      What is a Stock Split, how does it work, and its
                      advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className="t border-t-2 border-gray-700 ">
                    <p className="pr my-3">
                      Discover the ins and outs of stock splits, including how
                      they work and their potential advantages. Learn how this
                      corporate action can impact investors and stock price
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="s-card-2 border-1 shadow-xl my-5">
                <Card.Img variant="top" src="./Logos/blog-2.png" alt="no-img" />
                <Card.Body className="card1  bg-sky-100">
                  <Card.Title>
                    <h4 className="h-c text-gray-600 md:text-3lg">
                      What is a Stock Split, how does it work, and its
                      advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className="t border-t-2 border-gray-700 ">
                    <p className="pr my-3">
                      Discover the ins and outs of stock splits, including how
                      they work and their potential advantages. Learn how this
                      corporate action can impact investors and stock price
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="s-card-2 border-1 shadow-xl my-5">
                <Card.Img
                  variant="top"
                  src="./Logos/Be a pro trader with this 7 key concepts.jpeg"
                />
                <Card.Body className="card1 bg-sky-100 ">
                  <Card.Title>
                    <h4 className="h-c text-gray-600 md:text-3lg">
                      What is a Stock Split, how does it work, and its
                      advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className="t border-t-2 border-gray-700 ">
                    <p className="pr my-3">
                      Discover the ins and outs of stock splits, including how
                      they work and their potential advantages. Learn how this
                      corporate action can impact investors and stock price
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="s-card-4 border-1 shadow-xl my-5">
                <Card.Img
                  variant="top"
                  src="./Logos/Be a pro trader with this 7 key concepts.jpeg"
                />
                <Card.Body className="card1  bg-sky-100">
                  <Card.Title>
                    <h4 className="h-c text-gray-600 md:text-3lg">
                      What is a Stock Split, how does it work, and its
                      advantages
                    </h4>
                  </Card.Title>
                  <Card.Text className="t border-t-2 border-gray-700 ">
                    <p className="pr my-3">
                      Discover the ins and outs of stock splits, including how
                      they work and their potential advantages. Learn how this
                      corporate action can impact investors and stock price
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Slider>
          </div>
        </div>

        {/* <RegistrationForm/> */}
        <Investor />
        <Contactinformation />
      </div>
    </>
  );
};

export default Home;
