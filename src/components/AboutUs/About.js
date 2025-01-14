import React from 'react'
// import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './About.css'
import {Helmet} from "react-helmet";

const About = () => {
    return (

<>

        <Helmet>
            <meta charSet="utf-8" />
            <title>ABOUT US - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/about-us" />
        </Helmet>

        <div className='about'>

                <div className="about-content">
                    <Fade top>
                    <h1>About Us</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default About
