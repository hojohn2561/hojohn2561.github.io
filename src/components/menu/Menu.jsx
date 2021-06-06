import React from "react";
import "./menu.scss";

import Resume from "./John Ho's Resume.pdf";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>
        <li>
          <a aria-label="Intro" href="#intro" onClick={setIsMenuOpen}>
            Intro
          </a>
        </li>
        <li>
          <a aria-label="About" href="#about" onClick={setIsMenuOpen}>
            About
          </a>
        </li>
        <li>
          <a aria-label="Experience" href="#experience" onClick={setIsMenuOpen}>
            Experience
          </a>
        </li>
        <li>
          <a aria-label="Projects" href="#projects" onClick={setIsMenuOpen}>
            Projects
          </a>
        </li>
        <li>
          <a aria-label="Contact" href="#contact" onClick={setIsMenuOpen}>
            Contact
          </a>
        </li>
        {/* No need to close menu here because linking to page with resume */}
        <li>
          <a className="resumeLink" href={Resume}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
