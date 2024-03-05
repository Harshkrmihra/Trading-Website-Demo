import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className='p  '>
      <img src='./contact-icon/photo.jpeg' alt='no' />
      <div  className='absolute bg-inherit   top-[15vh] left-[10vh] lg:top-[30vh] lg:left-[30vh] md:top-[20vh] md:left-[5vh] '>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-color11 to-color7 text-[6vh] lg:text-[15vh] md:text-[7.5vh] md:tracking-wider lg:tracking-widest uppercase font-bold'>Investing axis</h1>
       <div className='md:py-5'>
       <label
            class=" bg-color2 min-w-sm max-w-xl hidden md:flex flex-col  md:flex-row items-start justify-start border py- px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
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
      <div className='contain w-[50%] py-5'>
      <p className='md:text-[09vh]'> Investment For The Future And To The Moon</p>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Pricing
