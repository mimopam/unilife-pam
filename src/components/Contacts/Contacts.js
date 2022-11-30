import React from 'react'
import './Contacts.css'

function Contacts() {
  return (
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
  )
}

export default Contacts