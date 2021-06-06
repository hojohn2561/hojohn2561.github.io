import React from "react";

import Link from "../Link";
import "./contact.scss";

export default function Experience() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-me">
        <h1>Contact Me.</h1>
        <h3>
          Have a question? Want to chat?{" "}
          <span>
            <a
              ariaLabel="Send Email Link"
              href={`mailto:ho.john2561@gmail.com`}
            >
              Shoot me an email{" "}
            </a>
          </span>
          or{" "}
          <Link
            linkTo="https://www.linkedin.com/in/hojohn2561/"
            text="contact me on LinkedIn."
            ariaLabel="LinkedIn Profile Link"
          />
        </h3>
      </div>
    </div>
  );
}
