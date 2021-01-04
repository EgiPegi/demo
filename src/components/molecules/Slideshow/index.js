import React from 'react'
import { Slide } from 'react-slideshow-image'
import { slide1, slide2, slide3 } from '../../../assets';
import 'react-slideshow-image/dist/styles.css'
import './style.css'

const slideImages = [
    slide1,
    slide2,
    slide3
  ];
  
  const properties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false
  }

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <img src={slideImages[0]} className="thumb-s"/>
            {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div> */}
            </div>
            <div className="each-slide">
            <img src={slideImages[1]} className="thumb-s"/>
            {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div> */}
            </div>
            <div className="each-slide">
            <img src={slideImages[2]} className="thumb-s"/>
            {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div> */}
            </div>
        </Slide>
    )
}

export default Slideshow
