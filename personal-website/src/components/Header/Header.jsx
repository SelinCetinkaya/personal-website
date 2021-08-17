import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import SelinCetinkayaResume from "../SelinCetinkayaResume3.pdf";

function Header({ smallHeader }) {
  return (
    <div className="header">
      <div
        className={`header-transition ${
          smallHeader ? "small-header-box" : "header-box"
        }`}
      >
        <div className="header-contents">
          <p
            className={`header-transition ${
              smallHeader ? "small-name" : "name"
            }`}
          >
            SELIN CETINKAYA
          </p>
          <p
            className={`header-transition ${
              smallHeader ? "small-header-description" : "header-description"
            }`}
          >
            Software Engineer
          </p>
        </div>
        <div className="header-links">
          <Link className="header-link" to="about-me" smooth={true}>
            About Me
          </Link>
          <Link className="header-link" to="projects" smooth={true}>
            Projects
          </Link>
          <a
            href={SelinCetinkayaResume}
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            Resume
          </a>
          <Link className="header-link" to="contact-me" smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
