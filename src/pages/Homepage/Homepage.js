import axios from 'axios'
import React from 'react'
import Banner from '../../components/Banner/Banner'
import CityCard from '../../components/CityCard/CityCard'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import './Homepage.css'


function Homepage() {

  //create state for cities
  const [cities, setCities] = React.useState([])


  React.useEffect(() => {
    //call api to get cities info

    axios.get("https://unilife-server.herokuapp.com/cities?limit=9")
    .then(res =>{
      console.log(res.data.response);
      setCities(res.data.response);
    })
    .catch(err => console.log(err))
    
  }, [])
  
  return (
    <div className="homepage-container">
        <Header />
        <Banner headline={"Find student homes with bills included"}
             subhead={"A simple and faster way to search for student accomodations"} />
        <h2>Student accomodations in our top cities</h2>
        <div className="cities-container">
          {
            cities.map(city=><CityCard city={city}/>)
          }
        </div>
        {/* {
          cities.map(city=><p>{city.name}</p>)
        } */}
        <button>See All Cities</button>
        <Contacts />
        <Footer />
    </div>
  )
}

export default Homepage