import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid mx-auto py-8 bg-black text-white ">
      <div className="grid grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-6 gap-4">
        
        <div className="col-span-2 md:col-span-2 text-center">
          <img
            src="https://i.ibb.co/bKWK5qm/Main-Logo.png"
            alt="Facebook"
            className="social-icon"
          />
        </div>
        
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="leading-8">
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Equity Charges</a></li>
            <li className="hover:text-blue-500">
              <a href="#" className="text-white ">Commodity Charges</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#" className="text-white ">Currency Charges</a>
            </li>
            <li className="hover:text-blue-500"><a href="#" className="text-white hover:text-red-500">Fund Transfer</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Products</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">About Us</a></li>
          </ul>
        </div>

        
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="leading-8">
            <li className="hover:text-blue-500">
              <a href="#" className="text-white ">Discount Broking</a>
            </li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Premium Broking</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">NRI Broking</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">MF & SIPs</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Research</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Online Training</a></li>
          </ul>
        </div>

        
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
          <ul className="leading-8">
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Contact Us</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Online Helpdesk</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Blogs</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Careers</a></li>
            <li className="hover:text-blue-500">
              <a href="#" className="text-white ">Corporate Office</a>
            </li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Course</a></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Quick Links:</h3>
          <ul className="leading-8">
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Disclaimer</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Privacy Policy</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Broker Norms</a></li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Refund Policy</a></li>
            <li className="hover:text-blue-500">
              <a href="#" className="text-white ">Terms & Conditions</a>
            </li>
            <li className="hover:text-blue-500"><a href="#" className="text-white ">Disclaimer</a></li>
          </ul>
        </div>
        
      </div>
      <hr className="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/4 p-4">
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded">
            Open Account
          </button>
        </div>


        <div className="flex-1 p-4">
          <div className="flex flex-row flex-wrap gap-2 justify-around">
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Best Share Broker</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Best Share Market Trading Company</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Best Options Trading Services</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Intraday Trading Services</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Stock Broker</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Option Trading</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Market Analysis</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Intraday Trading</a
            >
            <a
              href="#"
              className="border-r border-gray-300 py-2 px-4 no-wrap text-white "
              >Equity Trading</a
            >
            {/* <a href="#" className="border-r border-gray-300 py-2 px-4 no-wrap">Equity Trading</a> */}
            <a href="#" className="py-2 px-4 no-wrap text-white "
              >Intraday Trading</a
            >
          </div>
        </div>
      </div>
      <hr className="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto p-4 text-center lg:text-left md:text-left">
        <p>
          Issued in the interest of investors: Prevent Unauthorised transactions
          in your trading and Demat account. Update your mobile numbers/email
          IDs with Tradingbells. Receive alerts and information of all debit and
          other important transactions in your trading and Demat account
          directly from Exchange/Depository on your mobile/email at the end of
          the day.
        </p>
        <br/>
        <p>
          KYC is a onetime exercise while dealing in securities markets. Once
          KYC is done through a SEBI registered intermediary (broker, DP, Mutual
          Fund etc.), you need not undergo the same process again when you
          approach another intermediary.
        </p>
        <br/>
        <p>
          No need to issue cheques by investors while subscribing to IPO. Just
          write the bank account number and sign in the application form to
          authorise your bank to make payment in case of allotment. No worries
          of refund as money remains in investor's account.
        </p>
        <br/>
        <p className="text-white  text-center underline">2021-22, TradingBells All rights reserved</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;



//
