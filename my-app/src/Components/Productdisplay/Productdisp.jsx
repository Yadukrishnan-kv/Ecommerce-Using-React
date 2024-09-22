import React from 'react'
import './Productdisp.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
function Productdisp(props) {
    const {product}=props
  return (
    <div className='productdisp'>
        <div className="productdisp_left">
        <div className="product_img_list">
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
         <img src={product.image} alt="" />
        </div>
        <div className="productdisp_img">
        <img src={product.image} alt="" className='productdisp_main_img' />
        </div>
        </div>
        <div className="productdisp_right">
          <h1>{product.name}</h1>  
          <div className="productdisp_right_star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon}alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisp_right_price">
            <div className="productdisp_oldprice">${product.old_price}</div>
            <div className="productdisp_newprice">${product.new_price}</div>
          </div>
          <div className="productdisp_decrip">
          Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites. Made from 100% cotton, it's unisex and wears well on anyone and everyone.
          </div>
          <div className="productdisp_size">
            <h1>Select Size</h1>
            <div className="productdisp_right_size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button>Add to cart</button>
          <p className="productdisp_right_category"><span>category:</span>Women , Tshirts , Crop Top</p>
          <p className="productdisp_right_category"><span>Tags:</span>Models Latest</p>
        </div>
    </div>
  )
}

export default Productdisp