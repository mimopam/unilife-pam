import React from 'react'
import SmallBox from '../SmallBox/SmallBox'
import './InfoBox.css'

function InfoBox({property}) {
  return (
    <div className="info-container">
        <div className="info-top">
          <h2>{property?.address.street}, {property?.address.city}<br/>{property?.address.postcode}</h2>
        </div>
        <div className="info-bottom">
          <div className="info-row">
            <SmallBox top="Bedrooms" bottom={property?.bedroom_count} />
            <SmallBox top="Bathrooms" bottom={property?.bathroom_count} />
            <SmallBox top="Property Type" bottom={property?.property_type} />
          </div>
          
          <div className="info-row">
            <SmallBox top="Price" bottom={property?.rent} />
            <SmallBox top="Furnished type" bottom={property?.furnished} />
            <SmallBox top="Available from" bottom={property?.availability} />
          </div>
          

        </div>

    </div>
  )
}

export default InfoBox