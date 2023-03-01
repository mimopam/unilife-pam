import React from 'react'
import './Header.css'
import House from '../../assets/house.png'
import unilife from '../../assets/UniLife.png'
import { MdFavoriteBorder, MdMailOutline } from "react-icons/md";
import {Link, useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
        <Link to='/' className="header-logo">
            <img src={House} />
            <img src={unilife} />
        </Link>
        <div className="header-nav">
          <div className="header-btns">
            <MdFavoriteBorder onClick={()=>navigate(`/favorites`)}/>
            <p>ShortList</p>
          </div>
          <div className="header-btns">
            <MdMailOutline />
            <p>Contact Us</p>
          </div>
        </div>
    </div>
  )
}

export default Header