import React from "react";
import "../style/skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skill-cards">
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
        </div>
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
        </div>
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
        </div>
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
        </div>
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
        </div>
        <div className="skill">
          <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg" />
        </div>
        <div className="skill">
          <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
        </div>
        <div className="skill">
          <img src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH" />
        </div>
      </div>
      <div className="skills-text">
        <h3>
          {"<"}What I do{">"}
        </h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
}
