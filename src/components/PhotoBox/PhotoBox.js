import React from 'react'
import './PhotoBox.css'

function PhotoBox({pics}) {
  return (
    <div className="photo-container">
        <img src={pics[0]}  className="photo-top" />
        <div className="photo-bottom">
            <img src={pics[1]} />
            <img src={pics[2]} />
            <img src={pics[3]} />
        </div>
    </div>
  )
}

export default PhotoBox