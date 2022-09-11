import React from 'react'
import Banner from './banner.png'
import './Main.css'
function Main() {
  return (
    <div className='wrapper'>
      <div className="right">
        <h1>Find a Doctor<br /> for you now!</h1>
        <p>We take the guesswork out of loacting a doctor, hospital, or other medical facility in your are for you and your family </p>
        <div className="heroBtn">
          <button className="btn1">Get Started</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
      <div className="left">
        <img src={Banner} alt="Banner" />
      </div>
    </div>
  )
}

export default Main
