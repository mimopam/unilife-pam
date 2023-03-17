import React from 'react'
import './Bedrooms.css'

function Bedrooms({prices}) {
    //const [numbeds, setNumbeds] = React.useState(bedcount)
/*
    const bedkeys = ["bedroom_one", "bedroom_two", "bedroom_three", "bedroom_four", "bedroom_five", "bedroom_six", "bedroom_seven"]
    

    const bedrooms = () =>{
        const bedtemp = [];
        console.log("bedcount", bedcount);
        for (let i = 0; i < bedcount; i++){
            bedtemp.push( {
                name: `Bedroom ${i+1}`, 
                price:prices[bedkeys[i]]});
        }
        console.log(bedtemp)
        //console.log("obj is " , prices)
        // let num = 1;
        // for (let bname in prices){
        //     console.log(bname)
        //     bedprices.push({name: bname, 
        //                     price: prices[bname]  })
        //     num++;
        // }
        return bedtemp;
    }
    */

  return (
    <div className="bedrooms-container">
        <h2>Bedroom Prices</h2>
        <div>
            {/* {
                bedprices.map((item, index) => <p>Bedroom {index + 1} &nbsp; {item} </p>)         
                
            } */}
            {
                prices && Object.values(prices).map( (item, index) => 
                <div className="bed-prices" key={index}>
                    <p>{`Bedroom ${index+1}`}</p>
                    <p> &#8364;{item} per week</p>
                </div>)         
                
            }
        </div>
    </div>
  )
}

export default Bedrooms