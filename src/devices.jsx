import React from 'react'
import './devices.css'
import image1 from '../src/assets/OurPraise.png'
import stores from '../src/assets/removedBg.png'
export default function Devices() {
  return (
    <div className="main">
    <div>
        <img className='sideImage' src={image1} alt="here" />
        <img className='image1' src={image1} alt="here" />
        <img className='sideImage' src={image1} alt="here" />
    </div>
    <div data-aos="zoom" className="stores">
        <img className='stores' src={stores} alt="store icons here" />
    </div>
    </div>
  )
}
