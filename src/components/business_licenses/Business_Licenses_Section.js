import React from 'react'
import './Business_Licenses_Section.css'
import Certification from '../../assets/certification.webp'

const Business_Licenses_Section = () => {
  return (
<>
      <div className='businessLicensesSection container'>

            <div className='businessLicensesSection-header'>
                <h1>Recovery & Wellness Solutions: Acquiring Business Licenses Services</h1>
                <p>Recovery & Wellness Solutions is committed to supporting organizations and individuals in achieving the highest standards in behavioral health and wellness services. Our Licensing and Certification services are designed to ensure compliance with regulatory requirements and to promote best practices in the industry. We offer comprehensive support throughout the licensing and certification process, providing expertise and resources to help you succeed.</p>
            </div>



  <div className='businessLicensesSection-content'>
    
    <div className='businessLicensesSection-flex'>

      <div className='businessLicensesSection-left'>
        <h1>Licensing Support</h1>
        <ul>
          <li><b>Application Assistance:</b> We guide you through the application process, ensuring that all necessary documentation and forms are accurately completed and submitted on time.</li>
          <li><b>Regulatory Compliance:</b> Our team helps you understand and comply with state and federal regulations, including preparing for inspections and audits.</li>
          <li><b>Policy and Procedure Development:</b> We assist in developing and implementing policies and procedures that meet regulatory standards and enhance operational efficiency.</li>
          <li><b>Staff Training:</b> We offer training programs to ensure your staff is knowledgeable about licensing requirements and best practices.</li>
        </ul>
      </div>

      <div className='businessLicensesSection-right'>
        <img src={Certification} alt="Certification" loading="lazy"/>
      </div>

    </div>

  </div>

</div>

    </>
  )
}

export default Business_Licenses_Section
