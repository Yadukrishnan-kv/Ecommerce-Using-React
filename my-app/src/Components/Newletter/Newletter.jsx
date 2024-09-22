import React from 'react'
import './Newletter.css'
function Newletter() {
  return (
    <div className='newfooter'>
    <div className='newletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe On Our Newletter and Stay Updated </p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Newletter