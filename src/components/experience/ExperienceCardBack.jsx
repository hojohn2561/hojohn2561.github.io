import React from "react";

import "./experienceCardBack.scss";

function ExperienceCardBack({ description }) {
  return (
    <div className="back">
      <h3>Responsibilities</h3>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceCardBack;
