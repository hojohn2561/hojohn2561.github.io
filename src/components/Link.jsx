import React from "react";

export default function Highlight({ linkTo, text }) {
  return (
    <a
      className="highlight"
      href={linkTo}
      rel="noreferrer noopener"
      target="_blank"
    >
      {text}
    </a>
  );
}
