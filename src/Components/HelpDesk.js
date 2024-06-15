// HelpDesk.js

import React, { useState } from "react";
import { MdRefresh } from "react-icons/md";

const HelpDesk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clientCode: '',
    subject: '',
    query: '',
    captcha:"",
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form data submitted:", formData);
  };



  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptch] = useState(randomString);
  const [text, setText] = useState("false"); 
  const [isCorrect, setIsCorrect] = useState(false);

  const refreshString = () => {
    setCaptch(Math.random().toString(36).slice(8));
    console.log(captcha);
  };
  function handleInputChange(e) {
    setText(e.target.value);
    setIsCorrect(e.target.value === captcha); // Check if entered captcha matches the generated one
  }
    
  return (
    <>
      <div className="main-helpdesk my-14 ">
        <div className=" container my-5  ">
          <h1 className=" text-center uppercase">help desk</h1>
          <hr className="  bg-black font-extrabold " />
          <p className="text-gray-400 text-center">
            Troubled? Fill out the form below to raise a ticket for your query.
          </p>
        </div>
        {/* ...............form-data.................... */}
        <div className="container md:border-2 md:border-gray-500 md:rounded-xl px-5 md:px-0 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
            {/* ---------Name-field---------------- */}
            <div className=" ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* ---------------------Client-code-field-------------------- */}

            <div className="">
              <label
                htmlFor="clientCode"
                className="block text-sm font-medium text-gray-700"
              >
                client Code
              </label>
              <input
                type="clientCode"
                id="clientCode"
                placeholder="Type Code"
                name="clientCode"
                value={formData.clientCode}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* ---------------------Email-field-------------------- */}

            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="yyyy12@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* ------------------------------Subject-field-------------------- */}

            <div className="">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject here..."
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* ---------------------query------------------------------ */}
            <div className="">
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700"
              >
                Query
              </label>
              <textarea
              type="text"
                id="query"
                name="query"
                class=" border-2 font-medium text-gray-700py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                rows="3"
                placeholder="This is a textarea placeholder"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ---------------------captcha------------------------------ */}
            {/* Other input fields (Client Code, Email, Subject, Query) go here */}
            {/* CAPTCHA field */}
            <div>
      <div className="captcha-area flex border-1 border-gray-500 rounded-md w-[50%] md:w-[20%]">
        <div className=" w-[70%] md:w-[80%] border-r-2">
          <h3 className="text-md text-center">{captcha}</h3>
        </div>
        <div className="border-2 w-[30%] py-2 px-4 rounded-md bg-black">
          <MdRefresh onClick={refreshString} className="text-white text-[20px]" />
        </div>
      </div>
      <input
        type="text"
        id="uniqueId"
        placeholder="Enter Captcha"
        name="client-Id"
        value={text}
        onChange={handleInputChange}
        className="p-[1.7vh] mt-2  border rounded-md md:w-[20%]"
        required
      />
      {!isCorrect && <p style={{ color: 'red',fontSize:'10px' }}>Incorrect Captcha! Please try again.</p>}
    </div>
          
            

            {/* Attachment section */}
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Attachment
              </label>
              <input
                type="file"
                multiple
                accept=".jpg, .png, .pdf" // Specify allowed file types
                className="mt-1"
              />
              <p className="text-xs text-gray-500">
                Each file should be up to 2048KB in size.
              </p>
            </div>
            <button
              type="submit"
            
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
