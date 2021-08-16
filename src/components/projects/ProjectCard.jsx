import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Link from "../Link";

import "./projectCard.scss";

function ProjectCard({ project }) {
  const { name, description, githubLink, projectLink } = project;

  return (
    <ScrollAnimation
      animateOnce
      animateIn="animate__animated animate__slideInUp"
      delay={250}
    >
      <div className="project-card-container">
        <h2>{name}</h2>
        <p>{description}</p>

        <div className="technologies-used">
          <Link
            linkTo={githubLink}
            text={
              <img
                className="link-icon"
                src="assets/github logo.png"
                alt="GitHub Logo"
              />
            }
            aria-label="GitHub Profile Link"
          />
          <Link
            linkTo={projectLink}
            text={
              <img
                className="link-icon"
                src="assets/shortcut.png"
                alt="Shortcut to Project"
              />
            }
            aria-label="Shortcut to Project"
          />
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ProjectCard;
