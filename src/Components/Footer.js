import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer p-20">
        <div className="main-foooter">
          <div className="f-container grid grid-cols-5 gap-4 pl-12 pr-10 pt-10">
            <div className="f-container-1">
              <div>
                <img
                  src="./Images/logo.png"
                  alt="logo-t"
                  className=" logo h-12"
                />
              </div>
              <div>
                <h4 className="f-text text-lg text-gray-400 pt-2">
                  
                  Powered By:*
                </h4>
                <img
                  src="./Images/iifl_fevicon.png"
                  alt="no=iilf"
                  className="iilf h-14 mb-2"
                />
              </div>
              <div className="sbi-addres">
                <p className="f-p text-sm  text-gray-500 ">
                  SEBI Regn. No: INZ000164132, PMS SEBI Regn. No: INP000002213,
                  IA SEBI Regn. No: INA000000623, SEBI RA Regn. No: INH000000248
                </p>
                <p className="f-p text-green-600">
                  * Authorised Partners of IIFL Securities
                </p>
              </div>
            </div>

            <div className="f-container-2">
              <div className="f-company">
                <h1 className="f-text text-green-400 ga"> COMPANY</h1>
              </div>
              <div className="company-link ">
                <Link
                  to="#"
                  className="text text-sm text-gray-800 hover:text-gray-800"
                >
                  Equity Charges
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Commodity Charges
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Currency Charges
                </Link>
                <br />
                <Link
                  to="#"
                  className="text  text-sm  text-gray-800  hover:text-gray-800"
                >
                  
                  Fund Transfer
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Products
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="f-container-3">
              <div className="f-company">
                <h1 className="f-text text-green-400"> SERVICES</h1>
              </div>
              <div className="company-link">
                <Link
                  to="#"
                  className="text text-sm text-gray-800 hover:text-gray-800"
                >
                  Discount Broking
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Premium Broking
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  NRI Broking
                </Link>
                <br />
                <Link
                  to="#"
                  className="text  text-sm  text-gray-800  hover:text-gray-800"
                >
                  
                  MF & SIPs
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Research
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Online Training
                </Link>
              </div>
            </div>

            <div className="f-container-4">
              <div className="f-company">
                <h1 className="f-text text-green-400"> SUPPORT</h1>
              </div>
              <div className="company-link">
                <Link
                  to="#"
                  className="text text-sm text-gray-800 hover:text-gray-800"
                >
                  Contact Us
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm  text-gray-800  hover:text-gray-800"
                >
                  Online Helpdesk
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Blogs
                </Link>
                <br />
                <Link
                  to="#"
                  className="text  text-sm  text-gray-800  hover:text-gray-800"
                >
                  
                  Careers
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Corporate Office
                </Link>
                <br />
                <Link
                  to="#"
                  className="text text-sm text-gray-800  hover:text-gray-800"
                >
                  Course
                </Link>
              </div>
            </div>

            <div className="f-container-5">
              <div>
                <img
                  src="./Images/member-india.png"
                  alt="logo-t"
                  className=" logo-while  "
                />
              </div>
            </div>
          </div>


          <div className="flex">
            <div className=" flex-none border-solid  border-green-500 border-2 text-center pl-10 pt-2 pr-10  rounded-b-full rounded-tr-full w-60 h-12 ml-14 ">
              <Link to="/" className="f-opn uppercase  "> open an account</Link>
            </div>

            <div className=" link-b-f grow h-14 ml-9 pt-3">
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Disclaimer</a>
              <div className="vr text-black text-lg ml-4 mr-4" />
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Privacy Policy </a>
              <div className="vr text-black text-lg ml-4 mr-4" />
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Broker Norms</a>
              <div className="vr text-black text-lg ml-4 mr-4" />
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Refundr Policy</a>
              <div className="vr text-black text-lg ml-4 mr-4" />
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Terms & Conditions</a>
              <div className="vr text-black text-lg ml-4 mr-4" />
              <a href="/" className="f-link-1 text-sm text-gray-500 hover:text-gray-500">Disclaimer</a>
            </div>
          </div>

          <div className=" quick flex">
            <div className="f-pdiv flex-none pl-16 pt-3"> 
            <p className="f-p   text-sm"> Quick Links:</p>
            </div>
           <div className="quick-link grow h-14 pl-20 pt-3">
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Best Share Broker</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Best Share Market Trading Company</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500"> Best Options Trading Services</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Intraday Trading Services</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Stock Broker</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Option Tradingr</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500"> Market Analysis</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Intraday Trading</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Equity  Trading</Link>
            <div className="vr text-black text-lg ml-4 mr-4" />
            <Link to="#" className="quick-l text-sm text-gray-500 hover:text-gray-500">Intraday Trading</Link>
          
           </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;



//
