import React from "react";
import "../style/myWork.css";

export default function Project({ img, title, setClicked, clicked }) {
  const check = () => {
    if (clicked === title) {
      setClicked(undefined);
    } else {
      setClicked(title);
    }
  };

  return (
    <>
      <div className="project" onClick={() => check()}>
        <div className="project-img">
          <img src={img} />
        </div>

        <div
          className={
            clicked === title ? "project-header-clicked" : "project-header"
          }
        >
          <div className="project-title">{title}</div>
        </div>
      </div>
    </>
  );
}
