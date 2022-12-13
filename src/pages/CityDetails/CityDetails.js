import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar'
import {useParams} from 'react-router-dom'
import axios from 'axios'


import './CityDetails.css'
import Property from '../../components/Property/Property'


function CityDetails() {
    //need to show properties in a certain city
    //https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891
    const baseUrl="https://unilife-server.herokuapp.com/properties/city/"

    //need to retrieve cityid from params
    const {cityid} = useParams();
    //console.log(cityid);

    //make state to store properties
    const [properties, setProperties] = React.useState([])
    const [numProperties, setNumProperties] = React.useState(0)

    React.useEffect(
        ()=>{
            //call api to get properties in this city
            axios.get(`${baseUrl}${cityid}`)
            .then(res =>{
                console.log(res.data.response)
                setNumProperties(res.data.total)
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))

        }, []
    )
  return (
    <div className="city-details-container">
        <Banner headline={"Search Accommodations"}
             subhead={"Whatever you're after, we can helpl you find hte right student accommodation for you."} />
        <SearchBar />
        <h2>{numProperties} homes in {properties[0]?.address.city}</h2>
        <div className="properties">
        {
            // properties.map(item=> <p>{item?.rent}</p>)
            properties.map(item => <Property data={item} />)
        }
        </div>
    </div>
  )
}

export default CityDetails