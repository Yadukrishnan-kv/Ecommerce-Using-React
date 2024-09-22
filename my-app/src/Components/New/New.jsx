import React from 'react'
import "./New.css"
import arrow_icon from "../Assets/arrow.png"
import new_img from "../Assets/hero_image.png"
function New() {
  return (
    <div className='new'>
      <div className="new_left">
    
     <div>
      <div className="hand">
        <p>New</p>
        <p>Collection</p>
        <p>For Everyone</p>
      </div>
     
     </div>
      <div className="latest_btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      <div className="new_right">
      <img src={new_img} alt="" />
      </div>
      
    </div>
  )
}

export default New