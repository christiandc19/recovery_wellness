import React from "react";
import "./HomeSection1.css";
import Fade from "react-reveal/Fade";

import { FaCertificate } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";


const HomeSection1 = () => {
  return (
    <>
      <div className="section1">
        <div className="section1-header container">
          <h1>WHAT WE OFFER</h1>
          {/* <h2>Services from our best professionals</h2> */}
          <p>
          Our expert team is dedicated to guiding individuals and organizations toward sustainable recovery and wellness through personalized consulting, innovative programs, and evidence-based practices. Whether you're seeking individual support or organizational growth, we provide the tools and strategies needed for transformative change.
          </p>
        </div>

        <div className="section1-cards">
          <div className="wwa-cards-contents">
            <div className="card1 card">
              <Fade left>
                <div className="card-content">
                  <FaCertificate className="card-icon1" />
                  <h1>Licensing and Certification</h1>
                  <p>
                  W&R Consulting Solutions offers comprehensive Licensing and Certification services to ensure compliance with state and federal regulations for mental health and substance abuse treatment providers. Our expert team guides organizations through the entire licensing process, from application preparation to final approval, ensuring all standards and requirements are met. We also provide ongoing support and training to maintain certifications and stay updated with regulatory changes.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="card2 card">
              <Fade top>
                <div className="card-content">
                  <MdSupervisorAccount className="card-icon2" />
                  <h1>Operating / Supervising Treatment programs</h1>
                  <p>
                  W&R Consulting Solutions specializes in operating and supervising comprehensive treatment programs aimed at fostering mental health and addiction recovery. Our services include tailored therapeutic interventions, continuous program evaluation, and staff training to ensure the highest standards of care. We prioritize client-centered approaches and evidence-based practices to promote sustainable wellness and recovery outcomes.
                  </p>
        
                </div>
              </Fade>
            </div>

            <div className="card3 card">
              <Fade right>
                <div className="card-content">
                  <BsGraphUp className="card-icon3" />
                  <h1>Marketing, Contracting and Investing</h1>
                  <p>
                  W&R Consulting Solutions offers comprehensive marketing programs to enhance visibility and engagement for mental health and recovery services. Our contracting services streamline agreements and partnerships to ensure compliance and efficiency in service delivery. Additionally, our investing programs provide financial strategies and support to foster sustainable growth and development in the wellness and recovery sector.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
