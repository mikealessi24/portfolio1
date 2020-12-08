import React from "react";
import "../style/skills.css";
export default function SkillBar({ setClicked }) {
  return (
    <div className="skills">
      <img
        src="/javascript.svg"
        className="skill"
        onClick={() => {
          setClicked("js");
        }}
      />
      <img
        src="/html5.svg"
        className="skill"
        onClick={() => {
          setClicked("html");
        }}
      />
      <img
        src="/css3.svg"
        className="skill"
        onClick={() => {
          setClicked("css");
        }}
      />
      <img
        src="/react.svg"
        className="skill"
        onClick={() => {
          setClicked("react");
        }}
      />
      <img
        src="/nodejs.svg"
        className="skill"
        onClick={() => {
          setClicked("node");
        }}
      />
      <img
        src="/mysql.svg"
        className="skill"
        onClick={() => {
          setClicked("sql");
        }}
      />
      <img
        src="/mongodb.svg"
        className="skill"
        onClick={() => {
          setClicked("mongo");
        }}
      />
      <img
        src="/aws.svg"
        className="skill"
        onClick={() => {
          setClicked("aws");
        }}
      />
    </div>
  );
}
