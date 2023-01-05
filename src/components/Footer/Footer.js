import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";


function Footer() {
  return (
    <div className="footer-banner">
      <div className="contacts-container">
        <div className="contacts-left">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.
            </p>
            <input type="email" placeholder="Your email" />
        </div>
        <div className="contacts-right">
            <h3>Let's Socialize</h3>
            <div className="social-wrapper">
                <BsFacebook className="social-icon" />
                <p>Facebook</p>
            </div>
            <div className="social-wrapper">   
                <FaTwitter className="social-icon" />
                <p>Twitter</p>
            </div>
            <div className="social-wrapper">
                <FaInstagram className="social-icon" />
                <p>Instagram</p>
            </div>            
            
        </div>
    </div>
    <div className="footer">
        <div className="footer-left">
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookies Policies</p>
        </div>
        <div className="footer-right">
            <p>2022</p>
            <p>UniLife</p>
        </div>
    </div>
    </div>
  )
}

export default Footer