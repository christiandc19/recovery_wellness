import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import Fade from 'react-reveal/Fade';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


// Popup message after send button is clicked
const feedbackEl = document.querySelector(".feedback");
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
feedbackEl.setAttribute("class", "feedback hidden");
}, 4000);


        //    Service Id                     Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<div className="bg">


<div className="contactForm-header container">
            <h1>Recovery & Wellness Solutions</h1>
            <p>We're here to help you every step of the way. Whether you have questions about our programs, need support, or want to get in touch with our team, we're ready to assist you.</p>
</div>


<section className="contact-container">
<Fade left>
<div className="contact-cards-container">
    
    <div class="get_form_inner2">
            <h2>CALL US</h2>
            <p><AiOutlinePhone /><a href="tel:18184520201"> Ray Bretado +1 (818) 452-0201</a><br/>
            <AiOutlinePhone /><a href="tel:3233763293"> Michael Gennello +1 (323) 376-3293</a><br/>
            <AiOutlinePhone /><a href="tel:7472037054"> Danielle Chapman +1 (747) 203-7054</a><br/>
            </p>
    </div>

    <div class="get_form_inner2 card_email">
            <h2>EMAIL</h2>
            <p>
              
             
              <AiOutlineMail /> r.bretado@RecoveryAndWellnessSolutions.com </p>
              <p><AiOutlineMail /> mgennello@RecoveryAndWellnessSolutions.com</p>
              <p><AiOutlineMail /> d.chapman@RecoveryAndWellnessSolutions.com</p>


    </div>

    <div class="get_form_inner2">
            <h2>LOCATION</h2>
            <p><BsFillPinMapFill /> Los Angeles, California</p>
    </div>

</div>
</Fade>


          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>

              </div>
              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="8" required></textarea>
                <input type="submit" value="Submit" />
              </div>


              <div className="feedback hidden">
              {/* <img  src= {myAvatar} alt='avatar'/> */}
              <textarea name="message2" cols="30" rows="3" required>Message Sent to Recovery Wellness Solusions</textarea>
              </div>


            </form>
</div>

</section>
</div>



        </>
    )
}

export default ContactForm