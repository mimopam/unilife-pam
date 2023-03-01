import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CityCard from '../CityCard/CityCard';


function HomeProperties() {
    //create state for cities
  const [cities, setCities] = React.useState([])

    React.useEffect(() => {
        //call api to get cities info
        console.log("homepage loaded")
    
        axios.get("https://unilife-server.herokuapp.com/cities?limit=9")
        .then(res =>{
          console.log(res.data.response);
          setCities(res.data.response);
        })
        .catch(err => console.log(err))
        
      }, [])
  return (
    <div>
        <h2>Student accomodations in our top cities</h2>
        <div className="cities-container">
          {
            cities.map(city=><CityCard key={city._id} city={city}/>)
          }
        </div>

        <Link to="/allcities">
        <button className="see-cities-btn">See All Cities</button>
        </Link>

    </div>
  )
}

export default HomeProperties