import React from "react";
import "./navbar.scss";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={"navbar " + (isMenuOpen && "active")}>
      <div className="left-content">
        <div className="logo">JH</div>
      </div>

      <div className="right-content">
        <div className="menu-botton" onClick={setIsMenuOpen}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}
