import React from "react";
import "../style/contactMe.css";

export default function HireMe() {
  return (
    <div className="hire-me-container">
      <div className="hire-me-line">
        <div className="hire-title">Hire Me!</div>
        <div className="hire-text">
          I am available for full-time or part-time jobs. Send me an Email and
          let's get to work!
          <span role="img" aria-label="person" style={{ fontSize: "2vh" }}>
            👍🏼 👍🏼 👍🏼 👍🏼
          </span>
        </div>
      </div>
    </div>
  );
}
