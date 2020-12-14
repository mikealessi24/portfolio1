import React from "react";
import "../style/contactMe.css";
import HireMe from "../Components/HireMe";
import ContactForm from "../Components/ContactForm";

export default function ContactMe() {
  return (
    <div className="contactMe-container" id="contact-me">
      <HireMe />
      <ContactForm />
      <div className="contact-line-container">
        <h3>
          {"< "}Contact Me{" >"}
        </h3>
      </div>
    </div>
  );
}
