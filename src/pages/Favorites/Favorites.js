import React, {useContext} from 'react'
import { FavContext } from '../../contexts/FavContext';
import Property from '../../components/Property/Property';


function Favorites() {

    const {favorites, setFavorites} = useContext(FavContext);

  return (
    <div>
        {
            favorites.length > 0?
            favorites.map(item=><Property data={item}/>)
            // favorites.map(item=><p>{item.address.street}</p>)
            :
            "No favorites marked"
        }
    </div>
  )
}

export default Favorites