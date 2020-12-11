import React from "react";
import "../style/contactMe.css";

export default function ContactForm() {
  return (
    <div className="contactForm">
      <div className="form-container">
        <form className="form">
          <input className="name-input" type="text" placeholder="  Name..." />
          <input className="email-input" type="text" placeholder="  Email..." />
          <textarea
            className="contact-textarea"
            rows="10"
            cols="3"
            placeholder=" Ask me anything!"
          />
          <button className="submit-button">
            {"< "}Send{" >"}
          </button>
        </form>
      </div>
    </div>
  );
}
