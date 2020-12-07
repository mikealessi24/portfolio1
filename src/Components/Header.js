import React from "react";
import "../style/header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-background">
        <div className="header-main">
          <div className="header-content">
            <div className="profile-image-container">
              <img src="/portfolioImg.jpeg" alt="profile" />
            </div>
            <div className="header-text">
              <h1>
                Hello, I am{" "}
                <div className="name">
                  <a href="#contact-me">Michael Alessi</a>
                </div>
              </h1>
            </div>
          </div>
          <div className="line-effect">
            <div className="line-title">
              <h3>
                {"<"}Software Developer{">"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
