import React from 'react'
import './HomeSearch.css'
import axios from 'axios'

function HomeSearch() {

    const [beds, setBeds] = React.useState(1)

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
  )
}

export default HomeSearch