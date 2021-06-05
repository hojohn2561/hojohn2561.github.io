import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro-container" id="intro">
      <div className="introduction-container fade-in">
        <h1>Hi, I'm John Ho.</h1>
      </div>
      <div className="blurb-container fade-in">
        <h3>
          I'm a software engineer that finds joy in building applications that
          makes lives easier.
        </h3>
      </div>
    </div>
  );
}
