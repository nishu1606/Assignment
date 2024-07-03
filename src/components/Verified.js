import React from 'react'

const Verified = () => {
  return (
    <div><section class="text-gray-600 body-font">
    <div class="container-fluid px-5 py-14 mx-auto mt-10" style={{backgroundColor:'#E8FBFF'}}>
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Let Suppliers <span style={{textDecoration:'underline', textDecorationColor:'#EB7150', textDecorationThickness:3}}>Find You</span></h1>
        <button class="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0 " style={{backgroundColor:'#EB7150', fontSize:15}}>Get Verified</button>
      </div>
    </div>
  </section></div>
  )
}

export default Verified