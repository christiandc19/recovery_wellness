import React from 'react'

import Navbar from '../components/navbar/Navbar'
import HIRINGSTAFF from '../components/hiringStaff/Hiring_Staff'
import HIRINGSTAFFSECTION from '../components/hiringStaff/Hiring_Staff_Section'
import Footer from '../components/footer/Footer'


const HiringStaff = () => {
  return (
    <>
    <Navbar /> 
    <HIRINGSTAFF />
    <HIRINGSTAFFSECTION />
    <Footer />
     </>
  )
}

export default HiringStaff