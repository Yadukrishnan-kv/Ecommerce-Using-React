import React,{ useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import Breadcum from '../Components/Breadcum/Breadcum';
import Productdisp from '../Components/Productdisplay/Productdisp';
function Product() {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id === Number (productId))

  return (
    <div>
      <Breadcum product={product} />
      <Productdisp product={product}/>
    </div>
  )
}

export default Product