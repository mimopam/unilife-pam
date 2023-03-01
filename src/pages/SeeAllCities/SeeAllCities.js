import React from 'react'
import Banner from '../../components/Banner/Banner'

import {useNavigate} from 'react-router-dom'

import axios from 'axios'

import './SeeAllCities.css'

function SeeAllCities() {

  let navigate=useNavigate();

    //needs list of all city names

    const [cities, setCities] = React.useState([]);

    React.useEffect(() => {
        //call api to get cities info
    
        axios.get("https://unilife-server.herokuapp.com/cities?limit=20")
        .then(res =>{
          console.log(res.data.response);
          setCities(res.data.response);
        })
        .catch(err => console.log(err))
        
      }, [])

  return (
    <div>
        
        <Banner headline={"Student Accommodation"}
             subhead={"UniLife have student accommodation available across the U.  Whatever you're after, we can help you find the right student accommodation for you."} />

             <h2>Search by City</h2>
             <div className="allcities-container">
                {
                    cities.map(city=>
                    <button key={city._id}
                    onClick={()=>navigate(`/citydetails/${city._id}`)}>{city.name}</button>)
                }
             </div>
    </div>
  )
}

export default SeeAllCities