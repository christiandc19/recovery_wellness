import React from 'react'
import Fade from 'react-reveal/Fade';
import './Investing.css'
import {Helmet} from "react-helmet";

const Investing = () => {
    return (
        <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>INVESTING - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/investing" />
        </Helmet>

        <div className='investing'>
                <div className="investing-content">
                    <Fade top>
                    <h1>INVESTING</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Investing
