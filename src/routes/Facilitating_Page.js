import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Facilitating from '../components/facilitating/Facilitating'
import FacilitatingSection from '../components/facilitating/Facilitating_Section'
import ContactForm from '../components/contact/ContactForm'


const Facilitating_Page = () => {
  return (
    <>
    <Navbar /> 
    <Facilitating />
    <FacilitatingSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Facilitating_Page