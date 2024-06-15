import React from "react";
import "./Whatwedo.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import wrapper1 from "../../assets/recovery_wellness_professional_man.webp";
import Wellness from "../../assets/wellness.webp";

const WhatWeDo = () => {
  return (
    <>
    <div className="WhatWeDo-bg">

      <div className="wrapper1 ">
        <div className="wrapper-content container">

          <div className="wrapper-content-left">
          <img src={wrapper1} alt="nurse" loading="lazy"/>

            <div className="leaf">
            <img src={Wellness} alt="leaf" loading="lazy" className="leaf"/>
            </div> 
          </div>
        

          <div className="wrapper-content-right">
          <Zoom duration={1000}>
            <h1>What We Offer</h1>
          </Zoom>

            <br />
          
          <Fade bottom>
            <p>
            Partnering with our company offers a comprehensive suite of services tailored to meet the unique needs of businesses at various stages of development within the Recovery and Mental Health Industry. For startups, we provide end-to-end support to establish and grow their ventures from the ground up. For established organizations looking to expand, we facilitate multi-state growth strategies. Additionally, for long-standing businesses, we offer solutions to diversify revenue streams, ensuring sustainability in an increasingly competitive and consolidated market. Our ultimate goal is to create a robust foundation for any company that collaborates with us, ensuring long-term success and resilience.
            </p>
          </Fade>
  
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default WhatWeDo;
