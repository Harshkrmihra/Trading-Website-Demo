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
    <img src="./contact-icon/forward.png" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="./contact-icon/back.png" alt="nextArrow" {...props} />
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
        <div className="hom">
          <img
            src="./contact-icon/photo.avif"
            alt="no"
            className=" w-[100vw]"
          />
          <div className="absolute bg-inherit   top-[15vh] left-[10vh] lg:top-[30vh] lg:left-[10vw] md:top-[20vh] md:left-[5vh] ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-color11 to-color7 text-[7vw] md:tracking-wider lg:tracking-widest uppercase font-bold">
              Investing axis
            </h1>
            <div className=" md:pt-[2vw] ">
              <label
                class="home-search hidden  bg-color2 min-w-sm max-w-[40vw] md:flex flwx-wrap items-start justify-start  rounded-2xl gap-2"
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
            <div
              id="animated-div"
              className={`home-p w-[50%] tracking-widest text-color11   md:py-5 ${
                animate ? "animate-fade-up" : ""
              }`}
            >
              <p className="md:text-[4vw]">
                Investment For The Future And To The Moon
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------second-Part------------------- */}

        <Home2 />

        {/* ------------------Our Service--------------------- */}
        <div className="home-service bg-inherit ">
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

        <div className="our-blog container-fluid py-1 ">
          <div>
            <h1 className="blog-h text-center text-black font-bold uppercase py-8">
              Our Blog
            </h1>
          </div>
          <div className="all-Cards   w-[80%] mx-[10%] my-10 ">
            <Slider {...settings} className="slide ">
              {/* CARD--1 */}

              <div class="card">
                <div class="card-image">
                  <img src=" ./Logos/nblog.png" alt="no" className="w-full " />
                </div>
                <div class="category">
                  <a href="//">Best Bond Strategies to Manage your Portfolio</a>{" "}
                </div>
                <div class="heading">
                  Confused about bonds? This guide simplifies Indian bond
                  strategies for beginners. Discover buy-and-hold strategy,
                  laddering strategy, active management <br />
                  <a className=" " href="//">
                    Read More....
                  </a>
                  <div class="author">
                    By <span class="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>
              {/* CARD--2 */}

              <div class="card">
                <div class="card-image">
                  <img src=" ./Logos/nblog-4.png" alt="no2" className="w-full " />
                </div>
                <div class="category">
                  <a href="//">The Future of Indian Renewable Energy Stocks</a>{" "}
                </div>
                <div class="heading">
                  Thinking of investing sustainably? Dive into the future of
                  India's renewable energy stocks, understand what it is, top
                  performers, and how to get started! <br />
                  <a className=" " href="//">
                    Read More....
                  </a>
                  <div class="author">
                    By <span class="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>
              {/* CARD--3 */}

              <div class="card">
                <div class="card-image">
                  <img
                    src=" ./Logos/nblog-3.png"
                    alt="no3"
                    className="w-full "
                  />
                </div>
                <div class="category">
                  <a href="//">Understanding the Sensex and Nifty indexes</a>{" "}
                </div>
                <div class="heading">
                  Let’s understand Sensex & Nifty in Simple Terms! Learn what
                  they are, how they work, and how to track them for smarter
                  investment decisions.
                  <br />{" "}
                  <a className=" " href="//">
                    Read More....
                  </a>
                  <div class="author">
                    By <span class="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>

              {/* CARD--4 */}

              <div class="card">
                <div class="card-image">
                  <img src=" ./Logos/nblog-2.png" alt="no4" className="w-full " />
                </div>
                <div class="category">
                  <a href="//">
                    Indian Stock Market vs. Global Counterparts: 
                  </a>{" "}
                </div>
                <div class="heading">
                  Curious about the Indian stock market compared globally? This
                  guide dives in, comparing size, returns, sectors, and
                  regulations. 
                  <br />{" "}
                  <a className=" " href="//">
                    Read More....
                  </a>
                  <div class="author">
                    By <span class="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>

              {/* CARD--5 */}
              <div class="card">
                <div class="card-image">
                  <img src=" ./Logos/nblog-5.png" alt="no5" className="w-full " />
                </div>
                <div class="category">
                  <a href="//">
                    How do Changes in Consumer Behaviour impact
                  </a>{" "}
                </div>
                <div class="heading">
                  How your shopping habits can move the stock market! Explore
                  how consumer trends impact companies, stock prices, and
                  investment
                  <br />{" "}
                  <a className=" " href="//">
                    Read More....
                  </a>
                  <div class="author">
                    By <span class="name">Abi</span> 4 days ago
                  </div>
                </div>
              </div>
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
