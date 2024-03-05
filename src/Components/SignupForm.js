import React, { useState } from 'react';

const SignupForm = () => {

    const [formData, setFormData] = useState({
        mobileNumber: '',
        otp: ''
      });
    
      const [otpSent, setOtpSent] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSendOtp = (e) => {
        e.preventDefault();
        // Simulate sending OTP to the mobile number (can be replaced with actual API call)
        console.log('OTP Sent to:', formData.mobileNumber);
        setOtpSent(true);
      };
    
      const handleVerifyOtp = (e) => {
        e.preventDefault();
        // Simulate verifying OTP (can be replaced with actual API call)
        console.log('OTP Verified:', formData.otp);
        // You can add your signup logic here
        console.log('Signup with mobile number:', formData.mobileNumber);
      };
    


  return (
    <>
    
    <div className="container mx-auto mt-5 z-40">
      <div className="w-full max-w-md mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" aria-required>
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber" aria-required>
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="tel"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          {!otpSent ? (
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                  required/>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                type="button"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
    
    </>
  )
}

export default SignupForm
