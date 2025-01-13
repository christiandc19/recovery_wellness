import React from 'react'
import Fade from 'react-reveal/Fade';
import './Accreditation.css'
import {Helmet} from "react-helmet";

const Accreditation = () => {
    return (
        <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>ACCREDITATION - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/accreditation" />
        </Helmet>

        <div className='accreditation'>
                <div className="accreditation-content">
                    <Fade top>
                    <h1>Accreditation</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Accreditation
