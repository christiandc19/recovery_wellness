import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import { BsCheckLg } from 'react-icons/bs';
import WhoWeAre from '../../assets/team_of_professionals.webp'
import Wellness from "../../assets/wellness.webp";


const Whoweare = () => {
  return (
<>

<div className='homeSection2 '>
        <div className='homeSection2-content container'>

        <Fade left>
            <div className='homeSection2-left'>

            <h1>ABOUT RECOVERY & WELLNESS SOLUTIONS</h1>
                <h2>Consulting Solutions Empowering The Substance Abuse
                and Mental Health Treatment Industry.</h2>
                             
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Here at Wellness and Recovery Consulting Solutions, we offer a range of services to support individuals, organizations, and communities in achieving and maintaining optimal mental health, wellness, and recovery.
                        </p>
                    </div>
                </div>    
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>We are committed to helping you or your organization thrive. Our compassionate team of experts is here to support your journey towards health, happiness, and lasting recovery.</p>
                    </div>
                </div>     
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p> Our services are designed to address the comprehensive needs of individuals and organizations, promoting long-term wellness and recovery through personalized and evidence-based approaches.</p>
                    </div>
                </div>                       
            </div>
        </Fade>

        <Fade right>
            <div className='homeSection2-right'>
                    <img src={WhoWeAre} loading="lazy" alt='psychologist'/>
                    <div className="leaf2">
                        <img src={Wellness} alt="leaf" loading="lazy" />
                    </div>
            </div>
        </Fade>

        </div>

      </div>


</>
  )
}

export default Whoweare