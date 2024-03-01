// // import { React, useState } from "react";
// // import Offcanvas from "react-bootstrap/Offcanvas";
// // import { MdOutlineMenuOpen } from "react-icons/md";
// // import { IoMdClose } from "react-icons/io";

// // const Product = () => {
// //   const [show, setShow] = useState(false);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   return (
// //     <>

// //       <div className="flex justify-between items-cente mx-10">
// //         <img src="./Images/logo.png" alt="" className="h-img max-w-[20vh] " />
// //         <div className="hidden md:flex lg:flex xl:flex 2xl:flex">
// //           <ul className="flex gap-10 ">
// //             <li>
// //               <a>Home</a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/product"
// //               >
// //                 Products
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links ho text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Pricing
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 About Us
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline   lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Funds
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Courses
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <button
// //           className=" flex md:hidden   xl:hidden lg:hidden 2xl:hidden text-[5vh] "
// //           onClick={handleShow}
// //         >
// //           <MdOutlineMenuOpen />
// //         </button>
// //       </div>
// //       <Offcanvas  show={show} onHide={handleClose} >
// //         <Offcanvas.Header closeButton  >
// //           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
// //         </Offcanvas.Header>
// //         <Offcanvas.Body>
// //           <ul className="off-list">
// //             <li>
// //               <a
// //                 className="links text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold  lg:hover:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Home
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Products
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links ho text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Pricing
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold   lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 About Us
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline   lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Funds
// //               </a>
// //             </li>
// //             <li>
// //               <a
// //                 className="links  text-black font-semibold hover:font-semibold hover:no-underline  lg:text-black lg:font-semibold  lg:hover:no-underline lg:hover:text-green-400 "
// //                 href="/"
// //               >
// //                 Course
// //               </a>
// //             </li>
// //           </ul>
// //         </Offcanvas.Body>
// //       </Offcanvas>
// //     </>
// //   );
// // };

// // export default Product;
// import React from 'react'
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
          
//         },
//       },
//       {
//         breakpoint: 780,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 300,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

// const Product = () => {
//   return (
//    <>
//     <div className='bg-gray-100'>
        
//         </div>

//    </>
//   )
// }

// export default Product
import React from 'react'
import './Product.css';
const Product = () => {
  return (
    <>
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cards-wrapper">
      <div className="card">
        <img src='./Logos/Our-Blog-3.jpg' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card d-none d-md-block">
        <img src='./Logos/Our-Blog-4.png' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card d-none d-md-block">
        <img src='./Logos/blog-3.png' className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 4</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src='./Logos/blog-5.png' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 5</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src='./Logos/Our-Blog-3.jpg' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 6</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
        <div className="card">
          <img src='./Logos/Our-Blog-3.jpg' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 7</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src='./Logos/Our-Blog-3.jpg' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 8</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src='./Logos/Our-Blog-3.jpg' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title 9</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
    </>
  )
}

export default Product
