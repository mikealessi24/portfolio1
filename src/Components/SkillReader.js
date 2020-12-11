import React from "react";
import "../style/skills.css";

export default function SkillReader({ clicked, setClicked }) {
  return (
    <div className="skill-reader-container">
      {clicked === "js" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">JavaScript:</span> I use JavaScript for
          everything from creating functionality on the front-end to writing
          server requests on the back-end. JS is the base of my software
          development.
        </p>
      ) : null}
      {clicked === "html" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">HTML:</span> I use HTML along with
          JavaScript and CSS to create the front-end side of my applications.
        </p>
      ) : null}
      {clicked === "css" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">CSS:</span> I use CSS to style the
          front-end of my applications and put my artistic touch on the user
          interface design.
        </p>
      ) : null}
      {clicked === "react" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">React:</span> I use React front-end
          framework to make my user interfaces more organized and scalable.
          React's component based approach helps to plug in display components
          in different places and quickly change them if need be. This site was
          built using Create React App!
        </p>
      ) : null}
      {clicked === "node" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">NodeJs:</span> I use Node for all of my
          back-end development. Node allows me to construct REST API's using the
          ExpressJs library in order to communicate with databases.
        </p>
      ) : null}
      {clicked === "sql" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">MySQL:</span> I use MySQL and the SQL
          query language to create and retrieve data from relational databases
        </p>
      ) : null}
      {clicked === "mongo" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">MongoDb:</span> Similar to MySQL, I use
          MongoDb for data creation and retrieval
        </p>
      ) : null}
      {clicked === "aws" ? (
        <p
          className="skills-text-specific"
          onClick={() => setClicked(undefined)}
        >
          <span className="reader-title">Amazon Web Services:</span> I use AWS
          for cloud storage, authentication, serverless technology, and
          deployment.
        </p>
      ) : null}
    </div>
  );
}
