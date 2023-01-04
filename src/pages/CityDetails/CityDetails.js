import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchBar from '../../components/SearchBar/SearchBar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import studentpic from '../../assets/students.png'


import './CityDetails.css'
import Property from '../../components/Property/Property'


function CityDetails() {
    //need to show properties in a certain city
    //https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891
    const baseUrl="https://unilife-server.herokuapp.com/properties/city/"

    //need to retrieve cityid from params
    const {cityid, bedcount} = useParams();
    console.log(cityid, bedcount);

    //make state to store properties
    const [properties, setProperties] = React.useState([])
    const [numProperties, setNumProperties] = React.useState(0)
    const [beds, setBeds] = React.useState(1)
    const [city, setCity] = React.useState()

    const testSearch = (e) =>{
        //set bedroom count
        setBeds(e.target.value);
        console.log("beds is " + beds);
        const query = {
            city_id: cityid,
            bedroom_count:e.target.value,
            bathroom_count: 1
         }
      
          axios.post(`https://unilife-server.herokuapp.com/properties/filter`, 
          {query})
          .then(res =>{
            console.log(res.data)
            setProperties(res.data.response)
            setNumProperties(res.data.count)
          })
          .catch(err => console.log(err))
    }

    React.useEffect(
        ()=>{
            console.log('city details loaded ', bedcount);
            //decide which api call to use
            if (bedcount){
                //filter
                //make the axios post call here
                const query = {
                    city_id: cityid,
                    bedroom_count: bedcount,
                    bathroom_count: 1
                }
            
                axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
                .then(res =>{
                    console.log(res.data.response)
                    setProperties(res.data.response)
                    setNumProperties(res.data.total)
                })
                .catch(err => console.log(err))
            }
            else{
            //call api to get properties in this city
            axios.get(`${baseUrl}${cityid}`)
            .then(res =>{
                //console.log(res.data.response)
                setNumProperties(res.data.total)
                setProperties(res.data.response)
            })
            .catch(err => console.log(err))
        }

            //call api to get city info for bottom section
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityid}`)
            .then(res =>{
                console.log("city info")
                console.log(res.data.data[0])
                setCity(res.data.data[0])
                
            })
            .catch(err => console.log(err))

        }, []
    )
  return (
    <div className="city-details-container">
        <Banner headline={"Search Accommodations"}
             subhead={"Whatever you're after, we can helpl you find the right student accommodation for you."} />
        {/* <SearchBar /> */}
        <div className="city-search-container">
            <div className="search-box">
                <p>Bedroom</p>
                <select onChange={testSearch}>
                    <option value="">Any bedroom</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className="search-box">
                <p>Bathroom</p>
                <select>
                    <option value="">Any bathroom</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
        <h2>{numProperties} homes in {properties[0]?.address.city}</h2>
        <div className="properties">
        {
            // properties.map(item=> <p>{item?.rent}</p>)
            properties.map(item => <Property data={item} />)
        }
        </div>
        <div className="description-box">
            <div className="description-text">
                <p>{city?.universities}</p>
                <p>{city?.student_life}</p>

            </div>
            <img src={studentpic} className="description-img" />

        </div>
    </div>
  )
}

export default CityDetails