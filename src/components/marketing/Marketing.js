import React from "react";
import "./Marketing.css";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import marketResearch from '../../assets/market_research.webp'
import insuranceContracting from '../../assets/insurance_contracting.webp'
import realEstate from '../../assets/real_estate.webp'

const Marketing = () => {
  return (
    <>
      <div className="marketing">
        <div className="marketing-content">
          <div className="marketing-header container">
            <h1>Marketing, Contracting and Investing</h1>
            <p>
              Our compassionate staff utilizes established medical treatments to
              decrease withdrawal effects in an empathetic environment. In the
              meantime, you’ll receive behavioral health care from experienced
              counselors to boost your chances for an effective recovery.
            </p>
          </div>

          <div className="marketing-flex container">

          <Fade bottom>
            <div className="marketing-flexItem">
              <div className="flex-img">
                <img src={marketResearch} alt="Market Research"/>
              </div>

              <div className="flex-caption">
                <h1>Market Research</h1>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>
          </Fade>


          <Fade bottom>
            <div className="marketing-flexItem">
              <div className="flex-img">
              <img src={insuranceContracting} alt="Insurance Contracting"/>
              </div>

              <div className="flex-caption">
                <h1>Insurance Contracting</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="marketing-flexItem">
              <div className="flex-img">
              <img src={realEstate} alt="Real Estate"/>
              </div>

              <div className="flex-caption">
                <h1>Real Estate Advisement</h1>
                <p>
                  A highly addictive stimulant that affects the brain by
                  elevating levels of dopamine (a chemical associated with
                  reward or pleasure).
                </p>
              </div>
            </div>
            </Fade>
          </div>

          <LinkRoll
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Link to="/services">
              <div className="marketing-btn">
                <button>Learn More</button>
              </div>
            </Link>
          </LinkRoll>
        </div>
      </div>
    </>
  );
};

export default Marketing;
