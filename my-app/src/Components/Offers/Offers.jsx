import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offer'>
    <div className='offers'>
     <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
     </div>
     <div className="offers_right">
        <img src={exclusive_img} alt="" />
     </div>
    </div>
    </div>
  )
}

export default Offers