import React from 'react'
import '../Css/Loginsignup.css'
function Loginsignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="signup_field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">Already have an account ?<span> Login in here</span></p>
        <div className="loginsignup_agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing , i agree to the terms of use & policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup