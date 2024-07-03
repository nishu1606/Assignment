import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Content = () => {
  return (
    <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0  pr-0 w-full md:w-auto md:text-left text-center lg:w-4/5 mx-auto flex flex-wrap">
    <h1 class="text-gray-900 text-2xl title-font mb-4 font-extrabold font-poppins">Ready to dive into <span style={{color:'navy'}}> HABOT?</span></h1>
      <p class="leading-relaxed mb-4">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
      <div class="flex text-center">
          <button class="flex text-white bg-green-700 border-0 py-2 px-10 focus:outline-none hover:bg-green-900 rounded" style={{fontSize:15,textAlign:'center', alignItems:'center'}}>Sign Up Today!<IoIosArrowRoundForward className='ml-3' style={{color:'white', fontSize:30, display:'inline'}}/></button>
        </div>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
          
          <span class="title-font font-medium">Abu Dhabi</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
          
          <span class="title-font font-medium">Dubai</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
          
          <span class="title-font font-medium">Sharjah & Ajman</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
          
          <span class="title-font font-medium">Fujairah</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
          
          <span class="title-font font-medium">Ras Al Khaimah</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-white-100 rounded flex p-4 h-full items-center border border-orange-500 text-center justify-center items-center hover:bg-gray-100 cursor-pointer">
         
          <span class="title-font font-medium">Umm Al Quwain</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Content