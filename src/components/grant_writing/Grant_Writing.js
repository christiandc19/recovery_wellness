import React from 'react'
import Fade from 'react-reveal/Fade';
import './Grant_Writing.css'
import {Helmet} from "react-helmet";

const Grant_Writing = () => {
    return (
        <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>GRANT WRITING - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/grant-writing" />
        </Helmet>

        <div className='grantWriting'>
                <div className="grantWriting-content">
                    <Fade top>
                    <h1>GRANT WRITING</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Grant_Writing
