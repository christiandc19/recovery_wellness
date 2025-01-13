import React from 'react'
import Fade from 'react-reveal/Fade';
import './Services.css'
import {Helmet} from "react-helmet";

const Services = () => {
    return (

<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>OUR SERVICES - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/services" />
        </Helmet>


        <div className='services'>

                <div className="services-content">
                    <Fade top>
                    <h1>Our Services</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Services
