import React from "react";
import "../style/about.css";

import { Link } from "react-scroll";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  React.useEffect(() => {
    gsap.from(".about-container", {
      duration: 1.5,
      x: -1000,
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
      },
    });
  }, []);

  return (
    <div className="about-container" id="about-me">
      <div className="about-header">
        <div className="about-line-effect">
          <div className="about-line-text">
            <h3>
              {"< "}Who I am{" >"}
            </h3>
          </div>
        </div>
        <div className="about-content">
          <div className="about-textarea">
            <div className="about-text">
              <span className="paragraph">
                My name is Michael Alessi and I’m located in Charleston, South
              </span>
              Carolina. I graduated from the College of Charleston in 2019 with
              a Bachelor of Science in Public Health. After graduation, I
              started to explore my passion for computer science and software
              development. I enrolled in a Charleston-based immersive coding
              bootcamp called Jack Russell Software (JRS) and began creating web
              applications.{" "}
              <span className="project-highlight">
                <Link smooth={true} duration={500} to="projects">
                  Click here to look at some of my projects below!
                </Link>
              </span>{" "}
              I finished this program in November of 2020.
              <br></br>
              <span className="paragraph">
                With my experience from JRS I have gained the skills{" "}
              </span>
              to create web applications from start to finish. I learned to work
              alongside a team to meet deadlines and reach a common goal. I
              excelled in communication while overcoming the obstacle of
              learning remotely. I’m a passionate, hard-working developer that
              will always strive to do my best.
            </div>
          </div>
          <div className="aboutImg-container">
            <img src="/longPhoto.jpeg" alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
