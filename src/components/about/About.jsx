import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Link from "../Link";

import "animate.css/animate.min.css";
import "./about.scss";

const skills = [
  {
    skill: "HTML",
    logo: "assets/html5 logo.png",
  },
  {
    skill: "JavaScript",
    logo: "assets/javaScript logo.png",
  },
  {
    skill: "React",
    logo: "assets/react logo.png",
  },
  {
    skill: "Python",
    logo: "assets/python logo.png",
  },
  {
    skill: "Java",
    logo: "assets/java logo.png",
  },
  {
    skill: "Git",
    logo: "assets/git logo.png",
  },
  {
    skill: "CSS",
    logo: "assets/css logo.png",
  },
  {
    skill: "Sass",
    logo: "assets/sass logo.png",
  },
  {
    skill: "Bootstrap",
    logo: "assets/bootstrap logo.png",
  },
];

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-me-intro-container">
        <ScrollAnimation
          animateOnce
          animateIn="animate__animated animate__slideInUp"
        >
          <h1>About Me.</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="animate__animated animate__slideInUp"
        >
          <div className="about-me-intro">
            <div className="about-me-paragraph-container">
              <p>
                Hi! My name is John and I graduated from Drexel University with
                a Bachelor's degree in Computer Science in 2020. During my time
                there, I've had a co-op at{" "}
                <Link
                  linkTo="https://www.upenn.edu/"
                  text="a prestigeous university"
                  ariaLabel="University of Pennsylvania Link"
                />{" "}
                and two at{" "}
                <Link
                  linkTo="https://corporate.comcast.com/"
                  text="one of the largest media conglomerates"
                  ariaLabel="Comcast Link"
                />
                , all of which gave me the opportunity to gain experience and
                learn so much about front-end and back-end development!
              </p>
            </div>
            <div className="headshot-container">
              <img
                className="headshot"
                src="assets/headshot.jpg"
                alt="Headshot"
              />
            </div>
          </div>
        </ScrollAnimation>

        <div className="skills">
          <ScrollAnimation
            animateOnce
            animateIn="animate__animated animate__slideInUp"
          >
            <h2>Skills</h2>
            <div className="skills-paragraph-container">
              <p>
                My academic and professional experiences so far have allowed me
                to work with a wide variety of programming languages and
                software. I have written production-level front-end code in HTML
                and JavaScript and back-end code in Python and Java. When I'm
                working on my own projects, I tend to fall back on JavaScript
                and Python.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateOnce
            animateIn="animate__animated animate__slideInUp"
          >
            <div className="skills-display">
              <div className="skill-row">
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="HTML Logo"
                      aria-label="HTML Logo"
                      className="skill-logo"
                      src={skills[0].logo}
                    />
                  </div>
                  <h4>{skills[0].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="JavaScript Logo"
                      aria-label="JavaScript Logo"
                      className="skill-logo"
                      src={skills[1].logo}
                    />
                  </div>
                  <h4>{skills[1].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="React Logo"
                      aria-label="React Logo"
                      className="skill-logo"
                      src={skills[2].logo}
                    />
                  </div>
                  <h4>{skills[2].skill}</h4>
                </div>
              </div>

              <div className="skill-row">
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="Python Logo"
                      aria-label="Python Logo"
                      className="skill-logo"
                      src={skills[3].logo}
                    />
                  </div>
                  <h4>{skills[3].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="Java Logo"
                      aria-label="Java Logo"
                      className="skill-logo"
                      src={skills[4].logo}
                    />
                  </div>
                  <h4>{skills[4].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="Git Logo"
                      aria-label="Git Logo"
                      className="skill-logo"
                      src={skills[5].logo}
                    />
                  </div>
                  <h4>{skills[5].skill}</h4>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="CSS Logo"
                      aria-label="CSS Logo"
                      className="skill-logo"
                      src={skills[6].logo}
                    />
                  </div>
                  <h4>{skills[6].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="Sass Logo"
                      aria-label="Sass Logo"
                      className="skill-logo"
                      src={skills[7].logo}
                    />
                  </div>
                  <h4>{skills[7].skill}</h4>
                </div>
                <div className="skill-container">
                  <div className="skill-logo-container">
                    <img
                      alt="Bootstrap Logo"
                      aria-label="Bootstrap Logo"
                      className="skill-logo"
                      src={skills[8].logo}
                    />
                  </div>
                  <h4>{skills[8].skill}</h4>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
