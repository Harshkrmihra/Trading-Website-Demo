import React from "react";
import { MdAddIcCall, MdOutgoingMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contactinformation = () => {
  return (
    <>
    <div className=" cont-h bg-gradient-to-r from-slate-900 to-slate-700 py-5  "  >
     <div className="container-fluid py-10 flex flex-wrap justify-center gap-5 bg-gradient-to-r from-slate-900 to-slate-700">
          <div className="contact-1 ">
            <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 ">
              <div class="group  overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16   before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16   hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div class="z-10 flex flex-col items-center gap-2">
                <img src="./contact-icon/1.png" alt="no-img"/>
                  <h5 class="text-gray-50 "> CALL AND TRADE</h5>
                 <div className="flex  gap-2  ">
                 <MdAddIcCall  className="text-gray-50 h-7 w-6 "/>
                 <a class=" 2 text-gray-50 hover:no-underline hover:text-green-500" href="tel:+91 8819964539" >  +91 8819964539</a>
                 </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-2">
            <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
              <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16   before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16   hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div class="z-10 flex flex-col items-center gap-2">
                <img src="./contact-icon/constumer2.png" alt="no-img"/>
                  <h5 class="text-gray-50 "> CUSTOMER SUPPORT</h5>
                 <div className="flex  gap-2  ">
                 <MdAddIcCall  className="text-gray-50 h-7 w-6 "/>
                 <a class=" 2 text-gray-50 hover:no-underline hover:text-green-500" href="tel:+91 8819964539" >  +91 8819964539</a>
                 </div>
                 <div className="flex  gap-2  ">
                 <MdOutgoingMail className="text-gray-50 h-7 w-6 "/>
                 <a class="2 text-gray-50 text-sm hover:no-underline hover:text-green-500" href="mailto:chaurasiyaneha1124@gmail.com">chaurasiyaneha1124@gmail.com</a>
                 </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-3">
            <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
              <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16   before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16   hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div class="z-10 flex flex-col items-center gap-2">
                <img src="./contact-icon/Accountopen3.png" alt="no-img"/>
                  <h5 class="text-gray-50 ">ACCOUNT OPENING</h5>
                 <div className="flex  gap-2  ">
                 <MdAddIcCall  className="text-gray-50 h-7 w-6 "/>
                 <a class=" 2 text-gray-50 hover:no-underline hover:text-green-500" href="tel:+91 8819964539" >  +91 8819964539</a>
                 </div>
                 <div className="flex  gap-2  ">
                 <MdOutgoingMail className="text-gray-50 h-7 w-6 "/>
                 <a class="2 text-gray-50 text-sm hover:no-underline hover:text-green-500" href="mailto:chaurasiyaneha1124@gmail.com">chaurasiyaneha1124@gmail.com</a>
                 </div>
                </div>
              </div>
            </div>
          </div>
         
        </div> 

        <div className="container py-10  px-5 md:flex gap-10 md:border-2 rounded-full ">
            <div className="w-[100%]">
            <h3 className="text-red-500 ">Registered Office</h3>
        <div className=" flex gap-2">
            < MdLocationOn className="text-sky-500 h-8 w-7"/>
            <p className="text-gray-50 text-lg"> R-809 Metro Tower, Scheme no. 54, Vijaynagar,
Indore (M.P.) - 452010</p>
        </div>
            </div>
            <div className="w-[100%]">
            <h3 className="text-red-500 ">Branch Office</h3>
        <div className=" flex gap-2">
            < MdLocationOn className="text-sky-500 h-8 w-10"/>
            <p className="text-gray-50 text-sm md:text-lg"> Alpha Branch : 232-233 Dhan Trident, Scheme
No. 54, Vijaynagar, Indore (M.P.) - 452010</p>
        </div>
            </div>


        </div>
        </div> 
    </>
  )
}

export default Contactinformation
