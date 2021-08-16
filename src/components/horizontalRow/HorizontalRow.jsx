import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./horizontalRow.scss";
import "animate.css/animate.min.css";

export default function HorizontalRow() {
  return (
    <ScrollAnimation
      animateOnce
      animateIn="animate__animated animate__slideInLeft"
      delay={200}
    >
      <div className="horizontal-row-container">
        <span className="horizontal-row" />
      </div>
    </ScrollAnimation>
  );
}
