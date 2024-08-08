import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import Footer from "./Footer";
import ChatBox from "./ChatBox";

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
        <ValidationError prefix="Email" field="email" errors={state.errors} />

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
      <section className="social-icons">
        <div className="icons">
          <a
            href="https://github.com/amphreyomosh"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://x.com/harmoo530"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/river.happy.5/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/its__hamphrey/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@.harmo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://wa.me/254797587650"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </section>
      <ChatBox />
      <Footer />
    </>
  );
}

export default Contact;
