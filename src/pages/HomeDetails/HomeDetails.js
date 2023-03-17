import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import './HomeDetails.css'
import InfoBox from '../../components/InfoBox/InfoBox';
import Bedrooms from '../../components/Bedrooms/Bedrooms';
import checkmark from '../../assets/check.png'
//import Modal from 'react-modal'
import BookViewingModal from '../../components/BookViewingModal/BookViewingModal';
import { FavContext } from '../../contexts/FavContext';


function HomeDetails() {
  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);


  const {favorites, setFavorites} = useContext(FavContext);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  //need to retrieve homeid from params
  const {homeid} = useParams();
  console.log(homeid);

  //https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724baccb

  //create state for property info
  const [property, setProperty] = React.useState()
  const [propertyImages, setPropertyImages] = React.useState([])
  //const [bedPrices, setBedPrices] = React.useState([])

  React.useEffect(
    ()=>{

      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res =>{
        console.log('property info')
        console.log(res.data)
        setProperty(res.data)
        setPropertyImages(res.data?.images)
        //setBedPrices(Object.values(res.data?.bedroom_prices))
        //console.log('images', property?.images)
      })
      .catch(err => console.log(err))
      //eslint-disable-next-line
    }, []
  )

  const addToFavorites = () =>{
    //add property object to favorites
    setFavorites([...favorites, property])
  }

  return (
    <div className="home-grid">
      <PhotoBox pics={propertyImages} className="photo-box" />

      <div className="upper-right">
        <InfoBox className="info-box" property={property}/>
        <div className="btn-container">
          <button className="short-btn" onClick={addToFavorites}>Shortlist</button>
          <button className="view-btn" onClick={openModal}>Book Viewing</button>       
        
        </div>
      </div>

      <div>
        <h2>Description</h2> 
        <p>{property?.property_description}</p> 
      </div>

      <Bedrooms prices={property?.bedroom_prices}/>

      <div>
        <h2>Key Features</h2>
        <ul style=
        {{ listStyleImage: `url('${checkmark}')`}}>

        {
          property?.key_features.map(item=><li>{item}</li>)
        }
        </ul>
      </div>
      {
            modalIsOpen?
            <BookViewingModal address={property.address} closeModal={closeModal}/>
            :
            null

          }
    </div>
  )
}

export default HomeDetails


/* <form className="modal-form">
          <div className="form-half">
          <div className="input-wrapper">
          <label>Name 
            <input type="text" placeholder="Enter your name" />
          </label>
          </div>
          <div className="input-wrapper">
          <label>Email 
            <input type="text" placeholder="Enter your email address" />
          </label>
          </div>
          <div className="input-wrapper">
          <label>Phone Number 
            
          </label>
          <input type="text" placeholder="Enter your phone number" />
          </div>
          </div>

          <div className="form-half">
          <div className="input-wrapper">
          <label>Message
            <input type="text" placeholder="Enter your message" />
          </label>
          </div>
          <button className="modal-btn" onClick={closeModal}>Submit</button>
          </div>
        </form>
      </Modal> */

      // <Modal
      //   isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      //   style={customStyles}
      //   contentLabel="Example Modal"
      // >
      //   {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Book a Viewing</h2> */}
      //   {/* <h2 >Book a Viewing</h2> */}