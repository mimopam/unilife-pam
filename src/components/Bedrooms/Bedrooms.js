import React from 'react'
import './Bedrooms.css'

function Bedrooms({prices, bedcount}) {
    const [numbeds, setNumbeds] = React.useState(bedcount)

    const bedkeys = ["bedroom_one", "bedroom_two", "bedroom_three", "bedroom_four", "bedroom_five", "bedroom_six", "bedroom_seven"]
    console.log("prices", prices);

    const bedprices = [];
    for (let i = 0; i < bedcount; i++){

        bedprices.push( prices[bedkeys[i]]);
    }
    console.log(bedprices);

  return (
    <div className="bedrooms-container">
        <h2>Bedroom Prices</h2>
        <div>
            {
                bedprices.map((item, index) => <p>Bedroom {index + 1} &nbsp; {item} </p>)         
                
            }
        </div>
    </div>
  )
}

export default Bedrooms