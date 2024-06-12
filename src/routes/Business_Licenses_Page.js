import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BusinessLicenses from '../components/business_licenses/Business_Licenses'
import BusinessLicensesSection from '../components/business_licenses/Business_Licenses_Section'
import ContactForm from '../components/contact/ContactForm'


const Business_Licenses_Page = () => {
  return (
    <>
    <Navbar /> 
    <BusinessLicenses />
    <BusinessLicensesSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Business_Licenses_Page