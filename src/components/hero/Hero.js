import React from "react";
// import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import "./Hero.css";
import Hero1 from '../../assets/Hero1.webp'
import Hero2 from '../../assets/Hero2.webp'
import Hero3 from '../../assets/Hero3.webp'
import Hero4 from '../../assets/Hero4.webp'

import { MdPhoneCallback } from "react-icons/md";

const Hero = () => {
  return (
    <>
    <div className="hero-content">
      <div className="hero">

          <div class="fling-minislide">
            <img src={Hero1} alt="Slide 1" />
            <img src={Hero2} alt="Slide 2" />
            <img src={Hero3} alt="Slide 3" />
            <img src={Hero4} alt="Slide 4" />
          </div>
          


          <div className="hero-container">

<div className="content">
  <Zoom duration={3000}>
    <h1>Recovery & Wellness Solutions</h1>

            <Zoom duration={3000} delay={1000}>
              <h2>Consulting Solutions Empowering The Substance Abuse <br/>and Mental Health Treatment Industry</h2>
            </Zoom>
  </Zoom>

    <div className='hero-btn'>
      <Zoom duration={3000} delay={2000}>
          <h2><span><MdPhoneCallback /></span> <a href="tel:323-872-8721"> +1 323-872-8721</a></h2>
      </Zoom>                   
      </div>


</div>
</div>



        </div>


      </div>
    </>
  );
};

export default Hero;
