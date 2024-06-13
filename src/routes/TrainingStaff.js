import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import TRAININGSTAFF from '../components/trainingStaff/Training-Staff'
import TRAININGSTAFFSECTION from '../components/trainingStaff/Training-Staff-Section'

import Contact from '../components/contact/ContactForm'


const TrainingStaff = () => {
  return (
    <>
    <Navbar /> 
    <TRAININGSTAFF />
    <TRAININGSTAFFSECTION />
    <Contact />
    <Footer />
     </>
  )
}

export default TrainingStaff