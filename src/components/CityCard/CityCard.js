import React from 'react'
import './CityCard.css'
import {Link} from 'react-router-dom'

function CityCard({city}) {

    //show image_url as background
    //show property_count as text
    const imageStyle={
        backgroundImage:`url("${city.image_url}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        height:"200px",
        width:"300px",
        position:"relative",
        margin: "20px",
        borderRadius: "8px"
      }


  return (
    <Link to={`/citydetails/${city._id}`}>
    <div style={imageStyle} >
        <div className="city-info">
            <h2>{city.name}</h2>
            <p>{city.property_count} properties</p>
        </div>
        
        {/* <img src={city.image_url} /> */}
    </div>
    </Link>
  )
}

export default CityCard