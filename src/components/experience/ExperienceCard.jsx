import React from "react";

import ExperienceCardBack from "./ExperienceCardBack";
import ExperienceCardFront from "./ExperienceCardFront";
import FlipCard from "./../common/FlipCard";

import "./experienceCard.scss";

function ExperienceCard({ experience }) {
  const { datesWorked, employer, logo, position, description } = experience;

  return (
    <FlipCard>
      <ExperienceCardFront
        datesWorked={datesWorked}
        employer={employer}
        position={position}
        logo={logo}
      />
      <ExperienceCardBack description={description} />
    </FlipCard>
  );
}

export default ExperienceCard;
