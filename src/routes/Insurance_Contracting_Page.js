import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import InsuranceContracting from '../components/insurance_contracting/Insurance_Contracting'
import InsuranceContractingSection from '../components/insurance_contracting/Insurance_Contracting_Section'
import ContactForm from '../components/contact/ContactForm'


const Insurance_Contracting_Page = () => {
  return (
    <>
    <Navbar /> 
    <InsuranceContracting />
    <InsuranceContractingSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Insurance_Contracting_Page