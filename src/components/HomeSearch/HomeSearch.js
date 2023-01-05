import React from 'react'
import './HomeSearch.css'
import axios from 'axios'

function HomeSearch({setBeds, setType, setBaths, setMaxPrice}) {

    // const [beds, setBeds] = React.useState(1)
    // const [type, setType] = React.useState("")
    // const [baths, setBaths] = React.useState(1)
    // const [maxPrice, setMaxPrice] = React.useState()

    const testSearch = (e) =>{
        //set bedroom count
        // setBeds(e.target.value);
        // console.log("beds is " + beds);
        // const query = {
        //     city_id: cityid,
        //     bedroom_count:e.target.value,
        //     bathroom_count: 1
        //  }
      
        //   axios.post(`https://unilife-server.herokuapp.com/properties/filter`, 
        //   {query})
        //   .then(res =>{
        //     console.log(res.data)
        //     setProperties(res.data.response)
        //     setNumProperties(res.data.count)
        //   })
        //   .catch(err => console.log(err))
    }

  return (
    <div className="city-search-container">
            <div className="search-box">
                <p>Bedroom</p>
                <select onChange={(e)=>setBeds(e.target.value)}>
                    <option value="">Any bedroom</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className="search-box">
                <p>Bathroom</p>
                <select onChange={(e)=>setBaths(e.target.value)}>
                    <option value="">Any bathroom</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="search-box">
                <p>Max Price</p>
                <select onChange={(e)=>setMaxPrice(e.target.value)}>
                    <option value="">Any price</option>
                    <option value="500">500</option>
                    <option value="750">750</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                </select>
            </div>
            <div className="search-box">
                <p>Home Type</p>
                <select onChange={(e)=>setType(e.target.value)}>
                    <option value="">Any type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Semi-Detached">Semi-Detached</option>
                    <option value="Detached">Detached</option>
                </select>
            </div>
        </div>
  )
}

export default HomeSearch