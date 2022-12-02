import React from 'react'
import './TextBox.css'

function TextBox({image, headline, text}) {
  return (
    <div className="textbox-container">
        <img src={image} />
        <div className="textbox-right">
            <h3>{headline}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextBox