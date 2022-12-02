import React from 'react'
import './CompareBox.css'

function CompareBox({headline, image, text}) {
  return (
    <div className="compare-box">
        <img src={image} />
        <h3>{headline}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CompareBox