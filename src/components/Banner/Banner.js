import React from 'react'
import cover from '../../assets/cover-img.png'
//import House from '../../assets/House.svg'
import './Banner.css'

function Banner({headline, subhead}) {

    const bannerStyle = {
            height:"40vh",
            width: "100%",
            //backgroundImage: `url("${cover}")`,
          
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative" //needed for arrows to be absolute
    
        
    }
  return (
    <div style={bannerStyle}>
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>{headline}</h1>
        <h4>{subhead}</h4>
      </div>
    </div>
  )
}

export default Banner