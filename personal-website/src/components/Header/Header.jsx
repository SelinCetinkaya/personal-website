import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-contents">
          <p id="name">SELIN CETINKAYA</p>
          <p id="header-description">Software Engineer</p>
        </div>
        <div className="header-links">
          <Link className="header-link" to="/about-me">
            About Me
          </Link>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
          <Link className="header-link" to="/resume">
            Resume
          </Link>
          <Link className="header-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
