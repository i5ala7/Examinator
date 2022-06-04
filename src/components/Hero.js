import React from 'react'
import '../css/hero.css'
import landing from '../assets/images/landing.svg'



function Hero() {
  return (
    <div className='hero-feed'>
        <div className="text-aria">
          <h1>Pass your test with <span> Examinator. </span> </h1>
          <p>A secured online examination system <br /> that allows you to pass your exam from anywhere ! </p>
        
        </div>

        <div className="landing-illustration">
          <img className='landing-image' src={landing} alt="landing" />
        </div>
    </div>
  )
}

export default Hero