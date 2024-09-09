import React from "react";
import {Link , NavLink} from 'react-router-dom'

import "./header.css" 

function Header(){
    return (
        <div className="header">
            <div className="nav">
  <div className="">
    <Link to="/">
      <img src="./src/img/payless.png" alt="Logo" className="" />
    </Link>
  </div>
  <div className="main3">
    <NavLink to="/" className={({isActive}) => `${ isActive ? "text-orange-700" : "text-gray-700"}`}>
      Home
    </NavLink>
    
    <NavLink to="/About" className={({isActive}) => `${ isActive ? "text-orange-700" : "text-gray-700"}`}>
      About
    </NavLink>
    <NavLink to="/Contact" className={({isActive}) => `${ isActive ? "text-orange-700" : "text-gray-700"}`}>
      Contact
    </NavLink>
    <NavLink to="/User" className={({isActive}) => `${ isActive ? "text-orange-700" : "text-gray-700"}`}>
      User
    </NavLink>
  </div>
  <div className="login-get">
    <Link to="#"><div className="font-bold">Log In</div></Link>
    <Link to="#"><button className="">Get Started</button></Link>
  </div>
</div>

        </div>
    )
}

export default Header