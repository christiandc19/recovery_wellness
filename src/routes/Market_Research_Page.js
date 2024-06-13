import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MarketResearch from '../components/market_research/Market_Research'
import MarketResearchSection from '../components/market_research/Market_Research_Section'
import ContactForm from '../components/contact/ContactForm'


const Market_Research_Page = () => {
  return (
    <>
    <Navbar /> 
    <MarketResearch />
    <MarketResearchSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Market_Research_Page