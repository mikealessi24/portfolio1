import React from "react";
import "../style/skills.css";
import SkillBar from "../Components/SkillBar";

export default function Skills() {
  const [clicked, setClicked] = React.useState(undefined);
  return (
    <div className="skills-container">
      <SkillBar setClicked={setClicked} />
      <h1 className="skills-header">
        {"<"}What I do{">"}
      </h1>
      <div className="skills-text">
        <p className="skills-text-general">
          sample text, this is what i do in general
        </p>
        {clicked === "js" ? (
          <p
            className="skills-text-specific"
            onClick={() => setClicked(undefined)}
          >
            this is for js
          </p>
        ) : null}
        {clicked === "html" ? (
          <p
            className="skills-text-specific"
            onClick={() => setClicked(undefined)}
          >
            this is for html
          </p>
        ) : null}
      </div>
    </div>
  );
}
