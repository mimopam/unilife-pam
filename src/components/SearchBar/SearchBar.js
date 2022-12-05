import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-container">
        <input type="text" placeholder="Search by city" />
        <input type="text" placeholder="Any bedroom" />
        <button>Find Homes</button>
    </div>
  )
}

export default SearchBar