import React from "react";
import "../style/logo.css";
import { Link } from "react-scroll";
import { Tooltip } from "@material-ui/core";

export default function Logo() {
  return (
    <Tooltip title="Back to top">
      <Link smooth={true} duration={500} to="header">
        <div className="logo">
          {"<"}MA{">"}
        </div>
      </Link>
    </Tooltip>
  );
}
