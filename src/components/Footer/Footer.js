import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-banner">
      <div className="contacts-container">
        <div className="contacts-left">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.
            </p>
            <input type="text" />
        </div>
        <div className="contacts-right">
            <h3>Let's Socialize</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
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