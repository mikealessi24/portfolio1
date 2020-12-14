import React from "react";
import "../style/contactMe.css";
import HireMe from "../Components/HireMe";
import ContactForm from "../Components/ContactForm";
import SnackBarAlert from "../Components/SnackBarAlert";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactMe() {
  const [status, setStatus] = React.useState(undefined);

  React.useEffect(() => {
    gsap.from(".contactMe-container", {
      duration: 1.5,
      x: 1000,
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".contactMe-container",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);

  return (
    <div className="contactMe-container" id="contact-me">
      <HireMe />
      <ContactForm setStatus={setStatus} />
      {status ? <SnackBarAlert status={status} setStatus={setStatus} /> : null}
    </div>
  );
}
