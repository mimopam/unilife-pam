import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import './HomeDetails.css'
import InfoBox from '../../components/InfoBox/InfoBox';
import Bedrooms from '../../components/Bedrooms/Bedrooms';
import checkmark from '../../assets/check.png'
import Modal from 'react-modal'


function HomeDetails() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '16px'
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

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

  React.useEffect(
    ()=>{

      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res =>{
        console.log('property info')
        console.log(res.data)
        setProperty(res.data)
        setPropertyImages(res.data?.images)
        //console.log('images', property?.images)
      })
      .catch(err => console.log(err))

    }, []
  )

  return (
    <div className="home-grid">
      <PhotoBox pics={propertyImages} className="photo-box" />

      <div className="upper-right">
        <InfoBox className="info-box" property={property}/>
        <div>
          <button>Shortlist</button>
          <button onClick={openModal}>Book Viewing</button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Book a Viewing</h2> */}
        <h2 >Book a Viewing</h2>
        
        
        <form className="modal-form">
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
      </Modal>
        </div>
      </div>

      <div>
        <h2>Description</h2> 
        <p>{property?.property_description}</p> 
      </div>

      <Bedrooms bedcount={property?.bedroom_count} prices={property?.bedroom_prices}/>

      <div>
        <h2>Key Features</h2>
        <ul style=
        {{ listStyleImage: `url('${checkmark}')`}}>

        {
          property?.key_features.map(item=><li>{item}</li>)
        }
        </ul>
      </div>
    </div>
  )
}

export default HomeDetails