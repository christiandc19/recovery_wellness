import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Investing from '../components//investing/Investing'
import InvestingSection from '../components/investing/Investing_Section'
import ContactForm from '../components/contact/ContactForm'


const Investing_Page = () => {
  return (
    <>
    <Navbar /> 
    <Investing />
    <InvestingSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Investing_Page