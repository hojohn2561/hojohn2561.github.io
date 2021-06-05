import React from "react";

import Link from "../Link";
import "./footer.scss";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="copyright-text">
        Copyright © 2021 John Ho. All Rights Reserved.
      </div>
      <div className="icon-row-container">
        <Link
          linkTo="https://www.linkedin.com/in/hojohn2561/"
          text={<img className="logo" src="assets/linkedin logo.png" alt="" />}
        ></Link>
        <Link
          linkTo="https://github.com/hojohn2561/"
          text={<img className="logo" src="assets/github logo.png" alt="" />}
        ></Link>
      </div>
    </div>
  );
}
