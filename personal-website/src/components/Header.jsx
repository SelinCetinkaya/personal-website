import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-links">
      <Link to="/about-me">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Header;
