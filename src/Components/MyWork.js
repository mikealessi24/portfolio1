import React from "react";
import "../style/myWork.css";

export default function MyWork() {
  return (
    <div className="myWork-container">
      <div className="projects">
        <div className="project">
          <div className="project-img">
            <img src="/componentCart.png" />
          </div>
          <div className="project-title">
            <div>Component Cart</div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img src="/pickup.png" />
          </div>
          <div className="project-title">pickup</div>
        </div>
      </div>
    </div>
  );
}
