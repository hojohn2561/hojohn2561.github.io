import ScrollAnimation from "react-animate-on-scroll";

import ProjectCard from "./ProjectCard";
import TcgAssistantShowcase from "./TcgAssistantShowcase";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.scss";

const projects = [
  {
    name: "Help Me Fish",
    description:
      "A single-page web app that helps novice and experienced anglers in preparing for their next fishing trip built with ReactJS and Firebase.",
    githubLink: "https://github.com/hojohn2561/help-me-fish",
    projectLink: "https://help-me-fish.web.app",
  },
];

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <ScrollAnimation
        animateOnce
        animateIn="animate__animated animate__slideInLeft"
      >
        <h1>My Work.</h1>
      </ScrollAnimation>

      <TcgAssistantShowcase />

      <div className="other-projects">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
