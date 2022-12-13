import React from 'react'
import './Property.css'

function Property({data}) {
  return (
    <div className="property-container">
        <img src={data.images[0]} className="property-img" />
        <div className="info-bar">
            <div className="info-bar-left">
                <h3>110</h3>
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
            <p>View Home</p>
        </div>
    </div>
  )
}

export default Property