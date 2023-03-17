import React from 'react'
import Banner from '../../components/Banner/Banner'
//import SearchBar from '../../components/SearchBar/SearchBar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import studentpic from '../../assets/students.png'


import './CityDetails.css'
import Property from '../../components/Property/Property'
import HomeSearch from '../../components/HomeSearch/HomeSearch'


function CityDetails() {
    //need to show properties in a certain city
    //https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891
    const baseUrl="https://unilife-server.herokuapp.com/properties/city/"

    //need to retrieve cityid from params
    const {cityid, bedcount} = useParams();
    console.log(cityid, bedcount);

    //state for the search, need default values
    const [beds, setBeds] = React.useState(1)
    const [type, setType] = React.useState("")
    const [baths, setBaths] = React.useState(1)
    const [maxPrice, setMaxPrice] = React.useState()

    //make state to store properties
    const [properties, setProperties] = React.useState([])
    const [numProperties, setNumProperties] = React.useState(0)
    
    const [city, setCity] = React.useState()

    React.useEffect(
        ()=>{
            //do api call for homesearch
            //filter
            console.log("filter", beds, baths,type,maxPrice )
                //make the axios post call here
                const query = {
                    city_id: cityid,
                    bedroom_count: beds,
                    bathroom_count: baths,
                    property_type: type,
                    rent: maxPrice
                }
            
                axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
                .then(res =>{
                    console.log("filtering")
                    console.log(res.data)
                    setProperties(res.data.response)
                    setNumProperties(res.data.count)
                })
                .catch(err => console.log(err))

        //eslint-disable-next-line
        }, [beds, type, baths, maxPrice]
    )
    

    React.useEffect(
        ()=>{
            console.log('city details loaded ', bedcount);
            //decide which api call to use
            if (bedcount){
                console.log("filtering")
                //filter
                //make the axios post call here for search
                const query = {
                    city_id: cityid,
                    bedroom_count: bedcount,
                    //bathroom_count: 1
                }
            
                axios.post(`https://unilife-server.herokuapp.com/properties/filter`, {query})
                .then(res =>{
                    console.log("filtering")
                    console.log(res.data)
                    setProperties(res.data.response)
                    setNumProperties(res.data.count)
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
            //eslint-disable-next-line
        }, []
    )
  return (
    <div className="city-details-container">
        <Banner headline={"Search Accommodations"}
             subhead={"Whatever you're after, we can helpl you find the right student accommodation for you."} />
        <HomeSearch setBeds={setBeds} setBaths={setBaths} 
                    setMaxPrice={setMaxPrice} setType={setType}/>
        
        <h2>{numProperties} homes in {properties[0]?.address?.city}</h2>
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
            <img src={studentpic} alt="student" className="description-img" />

        </div>
    </div>
  )
}

export default CityDetails