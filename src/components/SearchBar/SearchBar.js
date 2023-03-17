import React from 'react'
import './SearchBar.css'
//import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SearchBar({cities}) {
  let navigate=useNavigate();

  const [cityname, setCityname] = React.useState("")
  const [beds, setBeds] = React.useState(1); //default value
  //const [cityid, setCityid] = React.useState("")

  // const query = {
  //    city_id: "633a96af6893d471a68cc88f",
  //    bedroom_count:6,
  //    bathroom_count: 1
  // }

  const handleSearch = () =>{
    console.log("button clicked")
    console.log(cityname, beds)
    //find the id that matches cityname
    let match = cities.filter(item => cityname === item.name)
    console.log(match);
    console.log("id is " , match[0]._id)
    //setCityid(match[0]._id)
    console.log("beds is ", beds)
    //route to city details page with these parameters
    navigate(`/citydetails/${match[0]._id}/${beds}`)

    //now send id and beds to homepage
    //filterProperties(cityid, beds)
  }

  /*
  const findId = (e) =>{
    console.log(e)
    //store in state
    setCityname(e.target.value)
    //what is city name that was selected
    console.log("name is ",  cityname)
  }
  */
 /*
  const testSearch = () =>{
    const query = {
      city_id: "633a96af6893d471a68cc88f",
      bedroom_count:6,
      bathroom_count: 1
   }

    axios.post(`https://unilife-server.herokuapp.com/properties/filter`, 
    {query})
    .then(res =>{
      console.log(res.data)
    })
    .catch(err => console.log(err))

  }
  */

  return (
    <div className="search-container">
      <select name="cities"
              onChange={(e)=>setCityname(e.target.value)}>
                <option>Search by city</option>
        {
          cities.map(item=><option value={item?.name}
                     key={item?._id} >{item?.name}</option>)
        }
      </select>
        {/* <input type="text" placeholder="Search by city" /> */}
        {/* <input type="text" placeholder="Any bedroom" /> */}
        <select name="bedrooms"
                onChange={(e)=>setBeds(e.target.value)}>
          <option value="">Any</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button onClick={handleSearch}>Find Homes</button>
    </div>
  )
}

export default SearchBar