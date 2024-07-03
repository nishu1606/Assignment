import React from 'react'
import HeroImage from './HeroImage'
import Content from './Content'
import VdoPage from './VdoPage'
import Works from './Works'
import Footer from './Footer'
import Verified from './Verified'



const Home = () => {
  return (
    <div>
       
        <HeroImage/>
        <Content/>
        <VdoPage/>
        <Verified/>
        <Works/>
        <Footer/>
        
    </div>
  )
}

export default Home