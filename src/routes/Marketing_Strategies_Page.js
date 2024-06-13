import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MarketingStrategies from '../components/marketing_strategies/Marketing_Strategies'
import MarketingStrategiesSection from '../components/marketing_strategies/Marketing_Strategies_Section'
import ContactForm from '../components/contact/ContactForm'


const Marketing_Strategies_Page = () => {
  return (
    <>
    <Navbar /> 
    <MarketingStrategies />
    <MarketingStrategiesSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Marketing_Strategies_Page