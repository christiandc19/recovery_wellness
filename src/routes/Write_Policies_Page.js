import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WritePolicies from '../components/write_policies/Write_Policies'
import WritePoliciesSection from '../components/write_policies/Write_Policies_Section'
import ContactForm from '../components/contact/ContactForm'


const Write_Policies_Page = () => {
  return (
    <>
    <Navbar /> 
    <WritePolicies />
    <WritePoliciesSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Write_Policies_Page