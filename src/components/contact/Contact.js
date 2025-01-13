import React from "react";
import Fade from 'react-reveal/Fade';
// import { MdPhoneCallback } from "react-icons/md";
import {Helmet} from "react-helmet";

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>CONTACT US - Recovery & Wellness Solutions</title>
            <link rel="canonical" href="https://recoveryandwellnesssolutions.com/contact" />
        </Helmet>

            <div className='contact-hero main-menu'>
                        <div className="contact-hero-content">
                        <Fade top>
                              <h1>Contact Us</h1>
                        </Fade>
                        <Fade right>
                              <h2>Reach out to us for any inquiries, appointments, or assistance. </h2>
                              <p><a href="tel:213-433-3926"> +1 (213)-433-3926</a></p>
                              <p><a href="tel:3233763293"> +1 (323) 376-3293</a></p>

                        </Fade>
                        </div>
            </div>

      <ContactForm />

      </>
    )
}

export default Contact