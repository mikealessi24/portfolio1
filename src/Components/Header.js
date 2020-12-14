import React from "react";
import "../style/header.css";
import { Link } from "react-scroll";

import Tooltip from "@material-ui/core/Tooltip";

import { gsap } from "gsap";

export default function Header() {
  let moveLine = React.useRef();
  let moveHeader = React.useRef();

  React.useEffect(() => {
    gsap.from(moveLine, 1.5, {
      opacity: 1,
      x: 1500,
      ease: "circ.out",
      delay: 1.5,
    });

    gsap.from(moveHeader, 1, {
      opacity: 0,
      y: -200,
      ease: "bounce.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="header-container" id="header">
      <div className="header-main">
        <div
          className="header-content"
          ref={(el) => {
            moveHeader = el;
          }}
        >
          <div className="profile-image-container">
            <img src="/portfolioImg.jpeg" alt="profile" />
          </div>
          <div className="header-text">
            <h1>
              Hi, I'm
              <div className="name">
                <Tooltip title="Get to know me!">
                  <Link smooth={true} duration={500} to="about-me">
                    {"< "}Michael Alessi{" >"}
                  </Link>
                </Tooltip>
              </div>
            </h1>
          </div>
        </div>
        <div
          className="line-effect"
          ref={(el) => {
            moveLine = el;
          }}
        >
          <div className="line-title">
            <h3>Software Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
