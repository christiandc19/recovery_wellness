import React from 'react'
import Fade from 'react-reveal/Fade';

import './Hiring_Staff.css'
import TrainingSection from './Hiring_Staff_Section'
import Contact from '../contact/ContactForm'

const Hiring_Staff = () => {
    return (
        <>
        <div className='hiringStaff'>

                <div className="hiringStaff-content">
                    <Fade top>
                    <h1>HIRING STAFF</h1>
                    </Fade>
                </div>
            </div>
        <TrainingSection />
        <Contact />
        </>
    )
}

export default Hiring_Staff