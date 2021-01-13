import React from "react";
import "../style/contactMe.css";

import emailjs from "emailjs-com";

import { TextField } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            className="textForm"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            className="textForm"
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            name="subject"
            className="textForm"
          />
          <TextField
            id="outlined-basic"
            label="Ask me anything"
            variant="outlined"
            name="message"
            multiline="true"
            rows="5"
            className="textForm"
          />
          <Button className="submit-button" type="submit">
            {"< "}Send{" >"}
          </Button>
        </form>
      </div>
    </div>
  );
}
