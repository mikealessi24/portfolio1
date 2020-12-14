import React from "react";
import "../style/myWork.css";
import Project from "../Components/Project";

export default function MyWork() {
  const [clicked, setClicked] = React.useState(undefined);
  return (
    <div className="myWork-container" id="projects">
      <div className="projects">
        <Project
          img={"pickup.png"}
          title={"Pickup"}
          setClicked={setClicked}
          clicked={clicked}
        />
        <Project
          img={"componentCart.png"}
          title={"Component Cart"}
          setClicked={setClicked}
          clicked={clicked}
        />
      </div>
      <div className="description-container">
        {clicked === "Pickup" ? (
          <p className="project-description">
            Pickup was my final project from the JRS coding bootcamp. It is an
            app where users can connect with other users to coordinate pickup
            activities. This project uses react for the front-end and with node
            for the back-end. It also uses a google map feature from the google
            cloud platform and it is hosted on AWS.
            <br></br>
            <br></br>
            <a
              href="https://dev.d3oo9vyk0aa8nj.amplifyapp.com/"
              target="_blank"
            >
              <span className="directions">Click here to view the site!</span>
            </a>
          </p>
        ) : null}
        {clicked === "Component Cart" ? (
          <p
            className="project-description"
            onClick={() => setClicked(undefined)}
          >
            Component Cart was the JRS team's final group project. It is a React
            Component sharing website where users can upload custom components
            via a JavaScript file and share them with other users. This project
            uses React for the front-end and node for the back-end.
            <br></br>
            <br></br>
            <a
              href="http://test-cohort-5-group-cohortfive.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
            >
              <span className="directions">Click here to view the site!</span>
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}
