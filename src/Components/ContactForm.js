import React from "react";
import "../style/contactMe.css";

import emailjs from "emailjs-com";

export default function ContactForm({ setStatus }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pa4mrxg",
        "template_skvqjco",
        e.target,
        "user_k9aFGH6otIpEXdJjv9XUu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({
            message: "Your message was sent!",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactForm" onSubmit={sendEmail}>
      <div className="form-container">
        <form className="form">
          <input
            className="name-input"
            type="text"
            placeholder="  Name..."
            name="name"
          />
          <input
            className="email-input"
            type="text"
            placeholder="  Email..."
            name="email"
          />
          <input
            className="subject-input"
            type="text"
            placeholder="  Subject..."
            name="subject"
          />
          <textarea
            className="contact-textarea"
            rows="10"
            cols="3"
            placeholder=" Ask me anything!"
            name="message"
          />
          <button className="submit-button" type="submit">
            {"< "}Send{" >"}
          </button>
        </form>
      </div>
    </div>
  );
}
