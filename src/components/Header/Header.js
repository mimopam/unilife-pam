import React from 'react'
import './Header.css'
import House from '../../assets/House.svg'
import { MdFavoriteBorder, MdMailOutline } from "react-icons/md";

function Header() {
  return (
    <div className="header-container">
        <div className="header-logo">
            <img src={House} />
        </div>
        <div className="header-nav">
            <MdFavoriteBorder />
            <p>ShortList</p>
            <MdMailOutline />
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Header