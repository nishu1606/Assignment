import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"


const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <div className='logo'><Link to='/'><img src="habot-logo.jpg" alt=""></img></Link></div>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li></li>
          </Link>
          <Link to='/find_suplier' className='find_suplier'>
            <li className="li">Find Suppliers</li>
          </Link>
          <Link to='/find_ser' className='find_ser'>
            <li className="li cursor-pointer">
              <select name="tags" id="tags">
                <option value="tag1">Find Service Tags</option>
                <option value="tag2">Service1</option>
                <option value="tag3">Service1</option>
                <option value="tag4">Service1</option>
              </select>
            </li>
          </Link>

          <Link to='/login' className='contact'>
            <li className="li"><button className='btns'>Login/SignUp</button></li>
          </Link>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross style={{ color: 'black' }} /> : <FaBars style={{ color: 'black' }} />}
        </button>
      </nav>
    </>
  )
}
export default Navbar

