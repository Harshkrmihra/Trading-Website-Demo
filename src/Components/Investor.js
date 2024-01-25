import React from "react";
import Slider from "react-slick";
// import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { AiTwotoneLike } from "react-icons/ai";
import { RiShareForward2Fill } from "react-icons/ri";


function stringToColor(string:string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = "#";
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

const Investor = () => {
    const [value, setValue] = React.useState(4);

    var settings = {
        dots: true,
        infinite: false,
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
              infinite: true,
              dots: true,
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
   <div className="container text-center ">
        <h2> Responsive </h2>

        <div className="container max-w-[80%] my-5">
          <Slider {...settings}>
            {/* ......card-1....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Harsh Kumar Mishra")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p>Harsh kumar Mishra</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>
                    {   /* .......card-2....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Neha Chaurasiya")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p> Neha Chaurasiya</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>
            {   /* .......card-3....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Nitin Sen")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p>Nitin Sen</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>

            {   /* .......card-4....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Manisha Pal")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p>Manisha Pal</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>
            {   /* .......card-5....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Shivani Gupta")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p>Shivani Gupta</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>
            {   /* .......card-6....... */}
            <div className="card  bg-white max-w-[100vh] px-3 py-4">
            <div className=" container flex gap-3 ">
            <div className="avtar ">
                  <Avatar {...stringAvatar("Sunil Chouhan")} />
                </div>
                <div className="name text-lg font-semibold">
                  <p>Sunil Chouhan</p>
                </div> 
            </div>
            <div className=" container flex gap-5 mt-3">
            <div className="avtar ">
            <Rating name="read-only" value={value} readOnly  className="r w-20"/>
                </div>
                <div className="name text-sm ">
                  <p> a month ago</p>
                </div> 
            </div>
            <div className=" text-[1.5vh]">
              <p >I had opened account in IIFL trading bells and i am getting full customer support and knowledgeable person. very strong support i'm very happy with my agent.</p>
            </div>
            <div className="icon flex flex-cols-2 gap-52 justify-center ">
              <AiTwotoneLike className="share text-2xl"/>
              <RiShareForward2Fill className="share text-2xl"/>
            </div>
            </div>
           
          </Slider>
        </div>
      </div>
   </>
  )
}

export default Investor
