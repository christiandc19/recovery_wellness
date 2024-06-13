import React from 'react'
import './Facilitating_Section.css'
import businessLicenseSection1 from '../../assets/business_license_section1.webp'
import { BsDot } from "react-icons/bs";

const Facilitating_Section = () => {
  return (
<>
      <div className='facilitatingSection container'>

            <div className='facilitatingSection-header'>
                <h1>Recovery & Wellness Solutions: Facilitating the Bid of Grants, Insurance Contracts, or any other funding opportunities</h1>
                <p>Recovery & Wellness Solutions (RWS) specializes in empowering organizations and businesses by facilitating bids for grants, insurance contracts, and various funding opportunities. With a dedicated team of experts versed in navigating the complexities of funding applications, RWS ensures that clients maximize their chances of securing vital financial resources. Our tailored approach is designed to streamline the process, from initial strategy development to final submission, fostering success in the competitive landscape of funding procurement.</p>
            </div>



  <div className='facilitatingSection-content'>
    <div className='facilitatingSection-flex'>
      <div className='facilitatingSection-left'>
        <h1>Facilitating Service Overview</h1>
        <p>At RWS, we offer comprehensive facilitation services for securing grants, insurance contracts, and other funding opportunities. Our services include:</p>
        <ul>

          <li><span><BsDot /></span>Needs Assessment: We conduct thorough assessments to identify your organization’s funding requirements and strategic priorities.</li>

          <li><span><BsDot /></span>Grant Research: Our team researches and identifies relevant grants, insurance contracts, and funding opportunities tailored to your organization’s mission and goals.</li>

          <li><span><BsDot /></span>Proposal Development: We collaborate closely with your team to develop compelling proposals that effectively communicate your organization’s impact and funding needs.</li>

          <li><span><BsDot /></span>Application Submission: We manage the entire application process, ensuring all requirements are met and deadlines are adhered to for a seamless submission.</li>

          <li><span><BsDot /></span>Post-Award Support: Upon successful funding, we provide guidance on compliance, reporting, and maximizing the impact of awarded funds.</li>

        </ul>


      </div>

      <div className='facilitatingSection-right'>
        <img src={businessLicenseSection1} alt="Certification" loading="lazy"/>
      </div>

    </div>

  </div>


  <div className='facilitatingSection-footer'>
    <p>Partner with RWS to navigate the complexities of funding procurement and unlock new possibilities for your organization’s growth and impact.</p>
  </div>


</div>

    </>
  )
}

export default Facilitating_Section
