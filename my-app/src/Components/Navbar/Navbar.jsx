import React, { useState } from 'react'
import './Navbar.css'
import logo from "../Assets/shopping-bag-logo-vector-14881160.jpg"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setmenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" />
            <p>FASION</p>
        </div>
        <ul className="nav_menu">
            <li onClick={()=>{setmenu("shop")}}><Link to='/'  style={{textDecoration:"none",color:"black"}}>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("men")}}><Link to="/men" style={{textDecoration:"none",color:"black"}}>MEN </Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("women")}}><Link to="/women" style={{textDecoration:"none",color:"black"}}>WOMEN</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to="/kids" style={{textDecoration:"none",color:"black"}}>KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav_cart">
          <Link to="/login" style={{textDecoration:"none"}}><button>LOGIN</button></Link>  
          <Link to="/cart" style={{textDecoration:"none"}}><img src={cart_icon} alt="" /></Link>  
            <div className="nav_cart_count">0</div>
        </div>
    </div>
  )
}

export default Navbar