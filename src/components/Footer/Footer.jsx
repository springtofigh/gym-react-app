import React from 'react';
import './Footer.css';
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={LinkedIn} alt="linkedIn-logo" />
        <img src={Instagram} alt="instagram-logo" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="fitclub-logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>

  )
}

export default Footer