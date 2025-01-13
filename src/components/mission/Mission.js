import React from 'react'
// import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Mission.css'
import {Helmet} from "react-helmet";

const Mission = () => {
    return (

<>

        <Helmet>
            <meta charSet="utf-8" />
            <title>OUR MISSION - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/mission" />
        </Helmet>

        <div className='mission'>

                <div className="mission-content">
                    <Fade top>
                    <h1>Our Mission</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Mission
