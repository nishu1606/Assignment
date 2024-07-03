import React,{useState} from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FindService from "./components/FindService"
import FindSuplier from "./components/FindSuplier"
import Login from "./components/Login"
import HeroImage from "./components/HeroImage"
import Home from "./components/Home"

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/find_ser" element={<FindService />} />

                    <Route exact path="/find_suplier" element={<FindSuplier/>} />
                    
                    <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App