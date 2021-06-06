import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Link from "../Link";

import "animate.css/animate.min.css";
import "./contact.scss";

export default function Experience() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-me">
        <ScrollAnimation
          animateOnce
          animateIn="animate__animated animate__slideInUp"
        >
          <h1>Contact Me.</h1>
          <h3>
            Have a question? Want to chat?{" "}
            <span>
              <a
                aria-label="Send Email Link"
                href={`mailto:ho.john2561@gmail.com`}
              >
                Shoot me an email{" "}
              </a>
            </span>
            or{" "}
            <Link
              linkTo="https://www.linkedin.com/in/hojohn2561/"
              text="contact me on LinkedIn."
              aria-label="LinkedIn Profile Link"
            />
          </h3>
        </ScrollAnimation>
      </div>
    </div>
  );
}
