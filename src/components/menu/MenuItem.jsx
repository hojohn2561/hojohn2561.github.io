import React from "react";

export default function MenuItem({ label, linkTo, onClick }) {
  return (
    <li>
      <a aria-label={label} href={linkTo} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}
