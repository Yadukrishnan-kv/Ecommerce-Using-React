import React from 'react'
import './Breadcum.css'
import arrow1_icon from '../Assets/breadcrum_arrow.png'
function  Breadcum (props) {
    const {product}=props;
  return (
    <div className='breadcum'>
    HOME <img src={arrow1_icon} alt="" /> SHOP <img src={arrow1_icon} alt="" /> {product.category} <img src={arrow1_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcum