import React from 'react'
import './SmallBox.css'

function SmallBox({top, bottom}) {
  return (
    <div className="small-box">
        <p>{top}</p>
        <h3>{bottom}</h3>
    </div>
  )
}

export default SmallBox