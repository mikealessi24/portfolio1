import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-line-effect">
          <div className="about-line-text">
            <h3>
              {"<"}Who am I{">"}
            </h3>
          </div>
        </div>
        <div className="about-content">
          <div className="about-textarea">
            <div className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
