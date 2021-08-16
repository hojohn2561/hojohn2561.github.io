import React from "react";

import "./experienceCardFront.scss";

function ExperienceCardFront({ datesWorked, employer, logo, position }) {
  return (
    <div className="front">
      <h2>{employer}</h2>
      <h3>{position}</h3>
      <h3 className="dates-worked">{datesWorked}</h3>
      <img src={logo} alt={employer} className="experience-logo" />
    </div>
  );
}

export default ExperienceCardFront;
