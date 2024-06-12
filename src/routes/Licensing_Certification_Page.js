import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import LicensingCertification from '../components/Licensing_Certification/Licensing_Certification'
import LicensingCertificationSection from '../components/Licensing_Certification/Licensing_Certification_Section'
import ContactForm from '../components/contact/ContactForm'


const Licensing_Certification_Page = () => {
  return (
    <>
    <Navbar /> 
    <LicensingCertification />
    <LicensingCertificationSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Licensing_Certification_Page