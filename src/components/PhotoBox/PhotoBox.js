import React from 'react'
import './PhotoBox.css'

function PhotoBox({pics}) {
  //make state to handle the slow issue?
  console.log("pictures", pics);

  const [picTop, setPicTop] = React.useState(pics[0])

  const [bottomPics, setBottomPics] = React.useState([pics[1], pics[2], pics[3]])
  return (
    <div className="photo-container">
      {/* <img src={picTop}  className="photo-top" />
        <div className="photo-bottom">
          {
            bottomPics.map(pic=><img src={pic} />)
          }
            
        </div> */}

        <img src={pics[0]}  className="photo-top" />
        <div className="photo-bottom">
            <img src={pics[1]} />
            <img src={pics[2]} />
            <img src={pics[3]} />
        </div>
        
    </div>
  )
}

export default PhotoBox