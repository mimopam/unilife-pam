import React,{useState} from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import CityDetails from './pages/CityDetails/CityDetails';



function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/allcities" element={<SeeAllCities />} />
        <Route path="/details/:cityid" element={<CityDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
      
    
  );
}

export default App;

{/* <form onSubmit={handleSubmit}>
        <input
          onChange={(e)=>setEmail(e.target.value)}
        />
       </form> */}

//        const [email,setEmail]=useState('')


// const handleSubmit=(e)=>{
//   e.preventDefault()
//   console.log(email)
// }
