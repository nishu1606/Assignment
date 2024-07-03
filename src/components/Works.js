import React from 'react'
import data from './data.json'

const Works = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-black-900">How it works?</h1>
            <p class="lg:w-3/3 mx-auto leading-relaxed text-base">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <div class="container mt-10 mx-auto ">
              <div class="flex flex-wrap justify-center items-center">
                {
                  data.map((e) => {
                    return (
                      <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-14 rounded-lg overflow-hidden text-center relative">
                          <div class="tracking-widest text-xs title-font font-medium text-black mb-1 "><img src={e.image} className='m-auto h-14 w-14' /></div>
                          <p class="leading-relaxed mt-5 mx-auto" style={{ width: 170, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>{e.content}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Works