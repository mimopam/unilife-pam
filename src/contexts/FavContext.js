import React,{useState,createContext,useEffect} from 'react'
export const FavContext = createContext()



export default function FavContextProvider(props) {
    const [favorites,setFavorites]=useState([])
 

//  useEffect(() => {
//   const theme=localStorage.getItem('darkMode')
//   if(theme!==null){
//     setDarkMode(JSON.parse(theme))
//   }
//  }, [])
  

 
  return (
    <FavContext.Provider value={{favorites, setFavorites}}>
        {props.children}
    </FavContext.Provider>
  )
} 