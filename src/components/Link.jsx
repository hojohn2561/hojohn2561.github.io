import React from "react";

export default function Highlight({ linkTo, text, ariaLabel }) {
  return (
    <a
      className="highlight"
      href={linkTo}
      rel="noreferrer noopener"
      target="_blank"
      aria-label={ariaLabel}
    >
      {text}
    </a>
  );
}
