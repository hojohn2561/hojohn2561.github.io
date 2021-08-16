import ScrollAnimation from "react-animate-on-scroll";

import TcgAssistantShowcase from "./TcgAssistantShowcase";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.scss";

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
    </div>
  );
}
