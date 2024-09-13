import React, { useRef, useState } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Submit');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_bdfl0ie", "template_ayzwhja", form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
                setButtonText('Message Sent!');
                setTimeout(() => setButtonText('Submit'), 4000);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="bg">
            <div className="contactForm-header container">
                <h1>Recovery & Wellness Solutions</h1>
                <p>We're here to help you every step of the way. Whether you have questions about our programs, need support, or want to get in touch with our team, we're ready to assist you.</p>
            </div>

            <section className="contact-container container">



                <div className="get_form_inner">
                    <div className="get_form_inner_text">
                        <h3>Get In Touch</h3>
                        <p><i>We'll keep your contact information strictly confidential.</i></p><br />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="inputs">
                            <input 
                                type="text" 
                                name='name' 
                                placeholder='Your Name' 
                                required 
                                pattern="[A-Za-z\s]+" 
                                title="Name should only contain letters and spaces." 
                                aria-label="Your Name" 
                            /> <br />
                            <input 
                                type="email" 
                                name='email' 
                                placeholder='Your Email' 
                                required 
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                title="Please enter a valid email address." 
                                aria-label="Your Email" 
                            /> <br />
                            <input 
                                type="tel" 
                                name='phone' 
                                placeholder='Your Phone' 
                                required 
                                pattern="[0-9]{10,15}" 
                                title="Phone number should be 10 to 15 digits." 
                                aria-label="Your Phone" 
                            /> <br />
                            <input 
                                type="text" 
                                name='subject' 
                                placeholder='Subject' 
                                required 
                                pattern=".{2,}" 
                                title="Subject must be at least 2 characters long." 
                                aria-label="Subject" 
                            /> <br />
                        </div>
                        <div>
                            <textarea 
                                name="message" 
                                placeholder="How can we help?" 
                                cols="30" 
                                rows="8" 
                                required 
                                aria-label="How can we help?" 
                            ></textarea>

                        <div className="disclaimer">
                              <p>Recovery & Wellness Solutions needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                  <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                                </LinkRoll>
                              </p>
                        </div>


                            <input type="submit" value={buttonText} />
                        </div>
                    </form>
                </div>


                <div className="contact-cards-container">
                        <div className="get_form_inner2">
                            <h2>CALL US</h2>
                            <p>
                                <AiOutlinePhone /><a href="tel:2134333926"> Shawn Bullington <br/> +1 213-433-3926</a>
                            </p>
                        </div>

                        <div className="get_form_inner2 card_email">
                            <h2>EMAIL</h2>
                            <p><AiOutlineMail /> SCBullington.Solutions@Outlook.com</p>
                        </div>

                        <div className="get_form_inner2">
                            <h2>LOCATION</h2>
                            <p><BsFillPinMapFill /> Los Angeles, California</p>
                        </div>
                    </div>




            </section>
        </div>
    );
};

export default ContactForm;
