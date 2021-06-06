import React from "react";
import "./navbar.scss";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={"fade-in navbar " + (isMenuOpen && "active")}>
      {/* Menu should never open if logo is clicked */}
      <div className="left-content" onClick={() => setIsMenuOpen(false)}>
        <a href="#intro" className="logo">
          JH
        </a>
      </div>

      <div className="right-content">
        <div className="menu-botton" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}
