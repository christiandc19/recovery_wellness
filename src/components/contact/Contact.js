import React from "react";
import Fade from 'react-reveal/Fade';
// import { MdPhoneCallback } from "react-icons/md";

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>Contact Us</h1>
            </Fade>
            <Fade right>
                  <h2>Reach out to us for any inquiries, appointments, or assistance. </h2>
                  <p><a href="tel:2134333926"> +1 (213) 433-3926</a></p>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact