import React,{useState} from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';

function App() {


  return (
    <div>
       <Homepage />
    </div>
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
