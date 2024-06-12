import React from 'react'
import './MissionSection.css'
import ContactForm from '../contact/ContactForm'
import Mission from '../../assets/mission-img1.webp'

const MissionSection = () => {
    return (
        <>


            <div className='missionSection container'>
                        <div className='missionSectionContent '>
                                <div className='missionSectionCaption'>
                                    <h1> Our Mission </h1>
                                    <p>At Recovery & Wellness Solutions, we are dedicated to empowering the substance abuse and mental health treatment industry through innovative, compassionate, and comprehensive mental consulting solutions. Our mission is to enhance the well-being and recovery of individuals by providing exceptional support, evidence-based practices, and personalized care. We strive to be a beacon of hope and a catalyst for positive change, fostering resilience and promoting sustainable recovery within the communities we serve.</p>
                                </div>


                                <div className='flexRight'>
                                    <div className='missionSectionRight'>
                                        <img src={ Mission } alt="Woman Therapist" loading="lazy"/>
                                    </div>
                                </div>
                </div>
            </div>


        
        <ContactForm />

</>
    )
}

export default MissionSection
