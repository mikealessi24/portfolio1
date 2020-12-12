import React from "react";
import "../style/logo.css";
import { Link } from "react-scroll";

export default function Logo() {
  return (
    <div className="logo">
      <Link smooth={true} duration={500} to="header">
        {"<"}MA{">"}
      </Link>
    </div>
  );
}
