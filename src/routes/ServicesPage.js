import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import ServicesSection from '../components/services/Services_Section'

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <Services />
           <ServicesSection />
           <Footer />
        </>
    )
}

export default AboutPage
