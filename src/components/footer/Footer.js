import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";
import { MdPhoneCallback } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/'>
                  <img src={logo} alt="Recovery and Wellness Logo" loading="lazy"/>
                </Link>
              </LinkRoll>
            </div>


            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>



          </div>



          <div className="col-container">


{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/services">
                    <p>Services</p>
                  </Link>
                </LinkRoll>
              </div>


{/* CONTACT */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Call Us</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>




            <div className="col">
              <h3>Services</h3>

{/* PHP */}
              <div>
                    <p>Licensing & Certification</p>
              </div>
{/* IOP */}

              <div>
                    <p>Operating/Supervising Treatment programs</p>
              </div>

{/* OP */}

              <div>
                    <p>Marketing, Contracting and Investing</p>
              </div>

            </div>






{/* Contact */}
            <div className="col">
              <h3>CONTACT</h3>
              <div>
                  <p>
                    <span><MdPhoneCallback /></span> <a href="tel:1234567890"> Ray Bretado +1 (818) 452-0201</a><br/>
                    <span><MdPhoneCallback /></span> <a href="tel:1234567890"> Kaleb Treis +1 (747) 203-7185</a>

                  </p>
              </div>

              <div>
                  <p><span><MdAlternateEmail  /><a href = "mailto: K.Treis@RecoveryandWellnessSolutions.com"> K.Treis@RecoveryandWellnessSolutions.com</a><br/><span><MdAlternateEmail  /></span><a href = "mailto: R.Bretado@RecoveryandWellnessSolutions.com"> R.Bretado@RecoveryandWellnessSolutions.com</a></span></p>
              </div>

    
            </div>
          </div>








          <p className="copyright">
            <p>
              &copy; 2024 Recovery & Wellness Solutions <br/>All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
