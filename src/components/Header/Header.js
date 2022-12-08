import React from 'react'
import './Header.css'
import House from '../../assets/House.svg'
import { MdFavoriteBorder, MdMailOutline } from "react-icons/md";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
        <Link to='/' className="header-logo">
            <img src={House} />
        </Link>
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