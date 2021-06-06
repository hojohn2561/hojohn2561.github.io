import React from "react";
import "./menu.scss";

import Resume from "./John Ho's Resume.pdf";
import MenuItem from "./MenuItem";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>
        <MenuItem label="Intro" linkTo="#intro" onClick={setIsMenuOpen} />
        <MenuItem label="About" linkTo="#about" onClick={setIsMenuOpen} />
        <MenuItem
          label="Experience"
          linkTo="#experience"
          onClick={setIsMenuOpen}
        />
        <MenuItem label="Projects" linkTo="#projects" onClick={setIsMenuOpen} />
        <MenuItem label="Contact" linkTo="#contact" onClick={setIsMenuOpen} />
        {/* No need to close menu here because linking to page with resume */}
        <MenuItem label="Resume" linkTo={Resume} />
      </ul>
    </div>
  );
}
