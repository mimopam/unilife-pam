import React from 'react'
import './SearchBar.css'

function SearchBar({cities}) {
  return (
    <div className="search-container">
      <select name="cities">
        {
          cities.map(item=><option value={item?.name}>{item?.name}</option>)
        }
      </select>
        {/* <input type="text" placeholder="Search by city" /> */}
        {/* <input type="text" placeholder="Any bedroom" /> */}
        <select name="bedrooms">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button>Find Homes</button>
    </div>
  )
}

export default SearchBar