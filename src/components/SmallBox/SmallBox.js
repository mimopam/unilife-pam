import React from 'react'
import './SmallBox.css'

function SmallBox({top, bottom}) {
  return (
    <div className="small-box">
        <small>{top}</small>
        <h2>{bottom}</h2>
    </div>
  )
}

export default SmallBox