import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <div className="about-container" id="about-me">
      <div className="about-header">
        <div className="about-line-effect">
          <div className="about-line-text">
            <h3>
              {"< "}Who am I{" >"}
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
                Go look at some of my projects below!
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
            <img src="/longPhoto.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}
