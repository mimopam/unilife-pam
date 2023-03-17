import axios from 'axios'
import React from 'react'
import Banner from '../../components/Banner/Banner'
//import CityCard from '../../components/CityCard/CityCard'
import CompareBox from '../../components/CompareBox/CompareBox'
//import Contacts from '../../components/Contacts/Contacts'
//import Footer from '../../components/Footer/Footer'
//import Header from '../../components/Header/Header'
import searchpic from '../../assets/globesearch.png'
import comparepic from '../../assets/compare.png'
import heartpic from '../../assets/heart.png'
import personpic from '../../assets/person.png'
import handpic from '../../assets/hands.png'
//import {Link} from 'react-router-dom'


import './Homepage.css'
import TextBox from '../../components/TextBox/TextBox'
import SearchBar from '../../components/SearchBar/SearchBar'
import HomeProperties from '../../components/HomeProperties/HomeProperties'


function Homepage() {

  //create state for cities
  const [cities, setCities] = React.useState([])

  //function to do filtering
  /*
  const filterProperties = (cityid, beds)=>{
    
    console.log("filter", cityid, beds)
    //make the axios post call here
    const query = {
      city_id: cityid,
      bedroom_count: beds,
      bathroom_count: 1
    }

    axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
    .then(res =>{
      console.log(res.data.response)
    })
    .catch(err => console.log(err))

  }
*/

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

  const searchtext="Find your dream home in the perfect area near your university."
  const comparetext="Compare student accomodation to find the right home for you."
  const billstext="Bills are included i all rent prices.  No hidden fees."

  const text1="Best selection of student accomodations. Never been easier to find a home that's right for you."

  const text2="Shortlist your favourite properties and send enquiries in one click."
  
  return (
    <div className="homepage-container">
        
        <Banner headline={"Find student homes with bills included"}
             subhead={"A simple and faster way to search for student accomodations"} 
        />
        
        <SearchBar cities={cities}  />

        <HomeProperties />
        {/* <h2>Student accomodations in our top cities</h2>
        
        <div className="cities-container">
          {
            cities.map(city=><CityCard key={city._id} city={city}/>)
          }
        </div>
        

        <Link to="/allcities">
        <button className="see-cities-btn">See All Cities</button>
        </Link> */}

        {/* {
          cities.map(city=><p>{city.name}</p>)
        } */}

        <div className="compare-container">
          <h1>Compare all inclusive student homes</h1>
          <div className="compare-boxes">
            <CompareBox headline="Search" 
                        image={searchpic}
                        text={searchtext} />
            <CompareBox headline="Compare" 
                        image={comparepic}
                        text={comparetext} />
            <CompareBox headline="Bills Included" 
                        image={heartpic}
                        text={billstext} />
          </div>

        </div>

        <div className="homepage-bottom">
          <div className="bottom-left">
            <TextBox image={handpic}
                    headline="Best selection"
                    text={text1} />
            <TextBox image={heartpic}
                     headline="Your favorite"
                     text={text2} />
            <button className="see-cities-btn">Search&Compare</button>
          </div>
          <img src={personpic} alt="person"/>
        </div>
        
        
    </div>
  )
}

export default Homepage