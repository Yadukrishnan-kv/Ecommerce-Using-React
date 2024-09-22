import React from 'react'
import './Footer.css'
import footer_logo from "../Assets/shopping-bag-logo-vector-14881160.jpg"
import insta_logo from "../Assets/instagram_icon.png"
import pintrest from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
function Footer() {
  return (
    <div className='footer'>
    <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>FASION</p>
    </div>
    <ul className="footer_links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer_social">
        <div className="footer_social_container">
            <img src={insta_logo} alt="" />
        </div>
        <div className="footer_social_container">
            <img src={pintrest} alt="" />
        </div>
        <div className="footer_social_container">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer_copyright">
        <hr />
        <p>Copyright @ - 2024 All Right Reserverd.</p>
    </div>
    </div>
  )
}

export default Footer