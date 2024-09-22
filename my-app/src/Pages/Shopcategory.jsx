import React,{useContext} from 'react'
import '../Css/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const Shopcategory = (props)=> {
  const {all_product}= useContext(ShopContext);
  return (
    <div className="shop_category">
      <img src={props.banner} alt="" className='shop_category_banner' />
      <div className="shop_category_index">
        <p><span>Showing 1-12</span> out of 36 products</p> 
        <div className="shop_category_sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>
      <div className="shop_category_product">
       {all_product.map((item,i)=>{
      if (props.category===item.category){
        return <Item  key={item.i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      }else{
        return null;
      }
       })}
      </div>
      <div className="explore_more">
        Explore  more
      </div>
    </div>
  )
}

export default Shopcategory