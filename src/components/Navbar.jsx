import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <img src={logo} alt="das das logo image" />
        </div>
        <div className="social-links">
          <i className="ri-youtube-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-medium-line"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
