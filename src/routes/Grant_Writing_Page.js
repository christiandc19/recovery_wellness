import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import GrantWriting from '../components/grant_writing/Grant_Writing'
import GrantWritingSection from '../components/grant_writing/Grant_Writing_Section'
import ContactForm from '../components/contact/ContactForm'


const Grant_Writing_Page = () => {
  return (
    <>
    <Navbar /> 
    <GrantWriting />
    <GrantWritingSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Grant_Writing_Page