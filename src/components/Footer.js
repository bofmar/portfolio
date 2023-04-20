import React from "react";
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer id='contact'>
      <h3 className='section-title'>Contact Me</h3>
      <div className='footer-wrapper'>
        <div className='contact-area'>
          <h4>Would you like to <span>get in touch?</span> Please fill out the following form to send me a message and I'll get back to you the soonest possible.</h4>
          <ContactForm />
        </div>
        <div className='socials-area'>
          <h4>Or reach out to me via social media.</h4>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
