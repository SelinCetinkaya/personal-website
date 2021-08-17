import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import SelinCetinkayaResume from "../SelinCetinkayaResume3.pdf";

function Header({ smallHeader }) {
  // const [smallHeader, setSmallHeader] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => {
  //       setSmallHeader(window.pageYOffset > 200);
  //       console.log(window.pageYOffset);
  //     });
  //   }
  // }, []);

  return (
    <div className="header">
      <div className={`${smallHeader ? "small-header-box" : "header-box"}`}>
        <div className="header-contents">
          <p id={`${smallHeader ? "small-name" : "name"}`}>SELIN CETINKAYA</p>
          {smallHeader ? "" : <p id="header-description">Software Engineer</p>}
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
