import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import RealEstateAdvisement from '../components/real_estate_advisement/Real_Estate_Advisement'
import RealEstateAdvisementSection from '../components/real_estate_advisement/Real_Estate_Advisement_Section'
import ContactForm from '../components/contact/ContactForm'


const Real_Estate_Advisement_Page = () => {
  return (
    <>
    <Navbar /> 
    <RealEstateAdvisement />
    <RealEstateAdvisementSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Real_Estate_Advisement_Page