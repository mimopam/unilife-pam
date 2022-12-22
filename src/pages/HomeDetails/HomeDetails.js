import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import './HomeDetails.css'
import InfoBox from '../../components/InfoBox/InfoBox';


function HomeDetails() {

  //need to retrieve homeid from params
  const {homeid} = useParams();
  console.log(homeid);

  //https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724baccb

  //create state for property info
  const [property, setProperty] = React.useState()

  React.useEffect(
    ()=>{

      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res =>{
        console.log('property info')
        console.log(res.data)
        setProperty(res.data)
      })
      .catch(err => console.log(err))

    }, []
  )

  return (
    <div className="home-grid">
      <PhotoBox pics={property?.images} className="photo-box" />
      <InfoBox className="info-box"/>
      <div>
      <h2>Description</h2> 
      <p>{property?.property_description}</p> 
      </div>
    </div>
  )
}

export default HomeDetails