import React from 'react'
import logo from '../assets/youfundr6.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="first-half">
                <h1>The best place on the net to find your tribe</h1>
                <p>Pitch and invest into the latest web3 projects while earning through contributions</p>
                <div className="button-container">
                    <button className='btn'>Mission</button>
                    <button className='btn' id='btn2'>Roadmap</button>
                </div>
            </div>
            <div className="second-half">
                <div className="image">
                    <img src={logo} alt="" />

                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero