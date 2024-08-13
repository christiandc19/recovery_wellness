import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";

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

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/licensing-certification">
                    <p>Licensing & Certification</p>
                  </Link>
                </LinkRoll>
              </div>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/accreditation">
                    <p>Business Accreditation</p>
                  </Link>
                </LinkRoll>
              </div>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/business-licenses">
                    <p>Acquiring Business Licenses</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>



            <div className="col">
              <h3>Operating</h3>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/training-staff">
                    <p>Training Staff</p>
                  </Link>
                </LinkRoll>
              </div>


              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/hiring-staff">
                    <p>Hiring Staff</p>
                  </Link>
                </LinkRoll>
              </div>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/operational-standards">
                    <p>Advising on Operational Standards</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>



            <div className="col">
              <h3>Marketing</h3>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/market-research">
                    <p>Market Research</p>
                  </Link>
                </LinkRoll>
              </div>


              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/real-estate-advisement">
                    <p>Real Estate</p>
                  </Link>
                </LinkRoll>
              </div>

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/investing">
                    <p>Investing</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>

    
          </div>








          <p className="copyright">
            <p>
              &copy; 2024 Recovery & Wellness Solutions All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
