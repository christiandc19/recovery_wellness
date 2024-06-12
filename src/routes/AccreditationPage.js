import React from 'react'

import Navbar from '../components/navbar/Navbar'
import ACCREDITION_LANDING from '../components/accreditation/Accreditation'
import ACCREDITATION_SECTION from '../components/accreditation/Accreditation_Section'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/footer/Footer'


const AccreditationPage = () => {
  return (
    <>
    <Navbar /> 
    <ACCREDITION_LANDING />
    <ACCREDITATION_SECTION />
    <ContactForm />
    <Footer />
     </>
  )
}

export default AccreditationPage