import React from "react";
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer id='contact'>
      <h3 className='section-title'>Contact Me</h3>
      <ContactForm />
      <SocialMedia />
    </footer>
  );
}
