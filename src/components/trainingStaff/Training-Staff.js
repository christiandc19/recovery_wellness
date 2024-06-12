import React from 'react'
import Fade from 'react-reveal/Fade';

import './Training-Staff.css'
import TrainingSection from './Training-Staff-Section'
import Contact from '../contact/ContactForm'

const trainingStaff = () => {
    return (
        <>
        <div className='trainingStaff'>

                <div className="trainingStaff-content">
                    <Fade top>
                    <h1>TRAINING STAFF</h1>
                    </Fade>
                </div>
            </div>
        <TrainingSection />
        <Contact />
        </>
    )
}

export default trainingStaff