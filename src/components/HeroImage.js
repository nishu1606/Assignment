import React from 'react';
import './HeroImage.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function HeroImage() {
  return (
<section
  className="relative bg-[url(https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2UxfnY58deGNulF4vJl83oTTTZS28rmChiUyqtpiF5AHzxD-o3qp3hK0DQH9fHppSd1uagHm9Z3O~s3UgniuwdiegAmaH4uXv5e1keDCq~Ta~SrJJc-H7LtLImtK6JmDSPiHq6KNpGBA~ouXn8Z6OqzjXnL6S6~CIeRcRiJaETe5OU51H1C~XzO-uXsTYsF-0lYRn7v8QC9PHwEozWD5LCCvkzVQcrncw0WdvIuIs2eBYu3Ka42uWrWvPceGXQL5RJcaApAwXQmKbEvfN3iSTXmtuWCahggwMD99OY5zZkKScztw7RJSvwTwoK3Odqepl-Vp-mDZlcgxkZH4B37IA__)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-600/75 2xl:bg-transparent 2xl:from-gray-600/95 :txlo-gray-600/25 ltr:2xl:bg-gradient-to-r rtl:2xl:bg-gradient-to-l"
  ></div>
  <div
   className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className=" text-center ltr:sm:text-left rtl:sm:text-right m-auto">
      <h1 className="text-2xl font-bold text-white sm:text-4xl">
       Are You Supplier?
      </h1>
      <p className=" text-white sm:text-4xl font-normal">
       Explore Matching Opportunities.
      </p>
      <div className=" flex flex-wrap gap-3 mt-8 justify-center">
        <a
          href="#"
          className="flex w-full rounded bg-white px-16 py-3 text-sm font-medium text-black sm:w-auto "
        >
         <MdEmail className='flex ' style={{color:'orange', fontSize:20}}/>Search your required service here
        </a>
        <a
          href="#"
          className="flex w-full rounded bg-white px-16 py-3 text-sm font-medium text-black sm:w-auto"
        >
           <FaLocationDot className='flex' style={{color:'orange', fontSize:17}}/>Search your desired location here
        </a>
        <a
          href="#"
          className="block w-full rounded bg-green-700 px-10 py-3 text-sm font-medium text-white shadow focus:outline-none sm:w-auto"
        >
          Search
        </a>
        <p className=" text-white sm:text-md font-bold mt-4">
      Are you a buyer ? <a href='/' style={{textDecoration:'underline'}}>Click here if you are looking to post a requirements</a>
      </p>
      </div>
    </div>
  </div>
</section>

  );
}