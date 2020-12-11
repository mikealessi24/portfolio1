import React from "react";
import "../style/skills.css";
import SkillReader from "../Components/SkillReader";
import SkillBar from "../Components/SkillBar";

export default function Skills() {
  const [clicked, setClicked] = React.useState(undefined);
  return (
    <div className="skills-container">
      <SkillBar setClicked={setClicked} clicked={clicked} />
      <h1 className="skills-header">
        {"< "}What I do{" >"}
      </h1>
      <p className="skills-text-general">
        I am a junior software developer seeking a position in the tech
        community. I use the languages and frameworks above to create full-stack
        web applications.{" "}
        <span className="skill-direction">
          Click on a specific icon to see what I use it for!
        </span>{" "}
        My primary focus is to create responsive and scalable websites using
        React for the client-side and nodeJs for the server-side. I strive to
        make my web applications clean and striking.
      </p>
      <SkillReader clicked={clicked} setClicked={setClicked} />
    </div>
  );
}
