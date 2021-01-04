import React from 'react'
import { Slide } from 'react-slideshow-image'
import { contoh1, contoh2, contoh3, contoh4 } from '../../../assets';
import 'react-slideshow-image/dist/styles.css'
import '../Slideshow/style.css'

const slideImages = [
    contoh1,
    contoh2,
    contoh3,
    contoh4
  ];
  
  const properties = {
    duration: 2000000,
    transitionDuration: 100,
    infinite: true,
    indicators: true,
    arrows: false
  }

const Previw = () => {
    return (
        <div>
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
        </div>
    )
}

export default Previw
