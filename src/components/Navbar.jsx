import React from 'react'
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav>
        <div className="nav-wrapper">
            <div className="logo"><img src={logo} alt="das das logo image" /></div>
            <div className="navlink__right"><p>SOme links</p></div>
        </div>
    </nav>
  )
}

export default Navbar