import React from 'react'
import './BookViewingModal.css'

function BookViewingModal({address, closeModal}) {
  return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="modal-top">
                <h1>Book A Viewing</h1>
                <h3>{address?.postcode} {address?.street}</h3>
                <h3>{address?.city}</h3>
            </div>
            <form className="modal-form">
                <div className="form-half">
                <div className="input-wrapper">
                    <label>Name </label>
                    <input type="text" placeholder="Enter your name" />
                    
                </div>
                <div className="input-wrapper">
                    <label>Email </label>
                    <input type="text" placeholder="Enter your email address" />
                    
                </div>
                <div className="input-wrapper">
                    <label>Phone Number 
                    </label>
                    <input type="text" placeholder="Enter your phone number" />
                </div>
                </div>

                <div className="form-half">
                    <div className="input-wrapper">
                        <label>Message</label>
                        <textarea rows="10" cols="40"
                            placeholder="Enter your message" ></textarea>
                        
                    </div>
                    <button className="modal-btn" onClick={closeModal}>Submit</button>
                </div>
                </form>
        </div>
        </div>
  )
}

export default BookViewingModal


