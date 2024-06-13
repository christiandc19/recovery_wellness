import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OperationalStandards from '../components/operational_standards/Operational_Standards'
import OperationalStandardsSection from '../components/operational_standards/Operational_Standards_Section'
import ContactForm from '../components/contact/ContactForm'


const Operational_Standards_Page = () => {
  return (
    <>
    <Navbar /> 
    <OperationalStandards />
    <OperationalStandardsSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Operational_Standards_Page