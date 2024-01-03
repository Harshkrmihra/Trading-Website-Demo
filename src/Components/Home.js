import { Input } from "@mui/material";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

const Home = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  // Define the onSubmit handler
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();
    // Validate the input values
    if (!name || !mobile || !email) {
      alert("Please fill all the required fields.");
    } else {
      // Do something with the input values
      console.log(name, mobile, email);
    }
  };
  return (
    <>
      <div className="home-img">
        <Image
          style={{ backgroundSize: "cover" }}
          src="./Images/image1.png"
          alt="no image"
        />
      </div>
      <h1 className="text"> TradingBells</h1>
      <h2 className="text1">Online Share & Commodity Broker</h2>

      <div className="search  ">
        <input
          type="text"
          className="form"
          placeholder="enter your mobile number"
          aria-label="enter number"
        />
        <button
          className="btn btn-primary btnG"
          type="button"
          id="button-addon2"
        >
          Get A Call
        </button>
      </div>

      <div className="why">
        <div className="container">
          <div className="row mt-20">
            <div className="col-12 text-center">
              <h1 className="whyPay text-4xl text-white ">
                {" "}
                why pay more for services that you don't avail?
              </h1>
            </div>
          </div>
        </div>

        <div className="container text-center mt-20 bg-transparent">
          <div className="row row-md-12 bg-transparent  ">
            <div className="col col-md-6 bg-transparent  text-center">
              <img
                src="./Logos/$200.png"
                alt="no-200"
                className="img-1 w-100 bg-inherit  "
              />
            </div>
            <div className="col col-md-6 bg-transparent mt-20   ">
              <div className="dement-form bg-white">
                <div className="top-1 p-3 ">
                  <h1> open dement account</h1>
                </div>
                <div className="bottom-1  p-20 ">
                  <Input
                    aria-label="stander-required"
                    value={setName}
                    placeholder="name"
                    className="int-1 mr-60 text-black"
                  />
                  <Input
                    aria-label="stander-required"
                    value={setEmail}
                    placeholder="Email"
                    className="int-1 mr-60 text-black"
                  />
                  <Input
                    aria-label="stander-required"
                    value={setMobile}
                    placeholder="MobileNo."
                    className="int-1 mr-60 text-black"
                  />
                </div>
                <div>
                  <Button onClick={handleSubmit}>sybmit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Our-Service-Container} */}
      <div className="container-1">
        <div className="row serviceSection ">
          <div className="col-12 p-8">
            <h1 className="text-center fw-bold fs-1">our Service</h1>
          </div>
          <div className="all-cards">
            <div class="flex flex-row space-x-20 p-36 ">
              <div className="contant-center ">
                <img src="./Images/our-service-1.png" alt="no-1" />
                <h1>Discount Broking</h1>
                <p>
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p>Zero Brokerage Investments</p>
                <button className="btnt">Learn More</button>
              </div>
              {/* second card */}
              <div className="contant-center">
                <img src="./Images/our-service-2.png" alt="no-1" />
                <h1>Discount Broking</h1>
                <p>
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p>Zero Brokerage Investments</p>
                <button className="btnt">Learn More</button>
              </div>
              {/* {third-card} */}
              <div className="contant-center">
                <img src="./Images/our-service-3.png" alt="no-1" />
                <h1>Discount Broking</h1>
                <p>
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p>Zero Brokerage Investments</p>
                <button className="btnt">Learn More</button>
              </div>
              {/* {forth-card} */}
              <div className="contant-center">
                <img src="./Images/our-service-4.png" alt="no-1" />
                <h1>Discount Broking</h1>
                <p>
                  Discount Broking is our primary product and what we specialise
                  in.
                </p>
                <p>Zero Brokerage Investments</p>
                <button className="btnt">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {BLog-Container} */}
      <div className="container-2">
      <div className="col-12 p-8">
            <h1 className="text-center p-0 fw-bold fs-1">Blog</h1>
          </div>
      </div>
    </>
  );
};

export default Home;
