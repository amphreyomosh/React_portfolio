import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
import Footer from './Footer';
import ChatBox from './ChatBox';


function Contact() {
  const [state, handleSubmit] = useForm("xanwwvlj");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
   <>
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    <ChatBox />
    <Footer />
    </>
   
  );
}

export default Contact;
