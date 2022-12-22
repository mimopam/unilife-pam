import React from 'react'
import './Property.css'
import house from '../../assets/house.png'
import {Link} from 'react-router-dom'

function Property({data}) {
  return (
    <Link className="property-container" to={`/homedetails/${data._id}`}>
        <img src={data.images[0]} className="property-img" />
        <div className="info-bar">
            <div className="info-bar-left">
                <h3>{data?.rent}</h3>
                <p>pppw including bills</p>
            </div>
            <div className="info-bar-right">
                <p>bed</p>
                <p>{data?.bedroom_count}</p>
                <p>bath</p>
                <p>{data?.bathroom_count}</p>
            </div>
        </div>
        <div className="type-bar">
           <p>{data?.property_type}</p> 
           <p>{data?.furnished}</p> 
        </div>
        <div className="view-bar">
            <img src={house}/>
            <p>View Home</p>
        </div>
    </Link>
  )
}

export default Property