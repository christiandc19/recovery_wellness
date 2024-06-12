import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";

import "./Licensing.css";

import Licensing from '../../assets/licensing.webp'
import BusinessLicense from '../../assets/business_license.webp'
import Accreditation from '../../assets/accreditation.webp'

const TherapyMH = () => {
  return (
    <>
      <div className="licensing">
        <div className="content">
          <Fade bottom>
            <div className="licensing-left">
              <div className="left-content container">
                <h1>Comprehensive Licensing and Certification Services.</h1>
                <h2>Unlock Your Potential</h2>
                <br />
              </div>
            </div>
          </Fade>

          <div className="licensing-right container">
            <Fade left>
              <div className="box1 item">
                <div className="box-content">
                  <img src={Licensing} alt="Woman signing a contract"/>
                  <h1>Licensing and Certification</h1>
                  <p>
                  W&R Consulting Solutions offers comprehensive Licensing and Certification services to ensure compliance with state and federal regulations for mental health and substance abuse treatment providers.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade top>
              <div className="box2 item">
                <div className="box-content">
                  <img src={BusinessLicense} alt="business woman"/>
                  <h1>Acquiring Business Licenses</h1>
                  <p>
                  W&R Solutions offers comprehensive business license acquisition services tailored to meet the regulatory requirements of various industries. Our streamlined process ensures swift and compliant procurement of business licenses, facilitating seamless operations for new and expanding businesses.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="box3 item">
                <div className="box-content">
                <img src={Accreditation} alt="depressed man"/>
                  <h1>Accreditation</h1>
                  <p>
                  W&R Solutions is enhancing its credibility and operational standards by acquiring business accreditation services. This strategic move aims to ensure adherence to industry best practices and regulatory requirements, bolstering customer trust and satisfaction. 
                  </p>
                </div>
              </div>
            </Fade>

            
          </div>

          <div className="licensing-btn">
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/services">
                <div className="licensing-btn">
                  <button class="licensing-cta">
                    <span>Learn More</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </Link>
            </LinkRoll>
          </div>

        </div>
      </div>
    </>
  );
};

export default TherapyMH;
