import React from "react";
import "./menu.scss";

import Resume from "./John Ho's Resume.pdf";

export default function Menu({ isMenuOpen, onClick }) {
  return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={onClick}>
            Intro
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClick}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={onClick}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClick}>
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
