import React from "react";
import "./about.scss";
import Link from "../Link";

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
        <h1>About Me.</h1>
        <div className="about-me-intro">
          <div className="about-me-paragraph-container">
            <p>
              Hi! My name is John and I graduated from Drexel University with a
              Bachelor's degree in Computer Science in 2020. During my time
              there, I've had a co-op at{" "}
              <Link
                linkTo="https://www.upenn.edu/"
                text="a prestigeous university"
              />{" "}
              and two at{" "}
              <Link
                linkTo="https://corporate.comcast.com/"
                text="one of the largest media conglomerates"
              />
              , all of which gave me the opportunity to gain experience and
              learn so much about front-end and back-end development!
            </p>
          </div>
          <div className="headshot-container">
            <img className="headshot" src="assets/headshot.jpg" alt="" />
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-paragraph-container">
            <p>
              My academic and professional experiences so far have allowed me to
              work with a wide variety of programming languages and software. I
              have written production-level front-end code in HTML and
              JavaScript and back-end code in Python and Java. When I'm working
              on my own projects, I tend to fall back on JavaScript and Python.
            </p>
          </div>

          <div className="skills-display">
            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[0].logo} alt="" />
                </div>
                <h4>{skills[0].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[1].logo} alt="" />
                </div>
                <h4>{skills[1].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[2].logo} alt="" />
                </div>
                <h4>{skills[2].skill}</h4>
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[3].logo} alt="" />
                </div>
                <h4>{skills[3].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[4].logo} alt="" />
                </div>
                <h4>{skills[4].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[5].logo} alt="" />
                </div>
                <h4>{skills[5].skill}</h4>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[6].logo} alt="" />
                </div>
                <h4>{skills[6].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[7].logo} alt="" />
                </div>
                <h4>{skills[7].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[8].logo} alt="" />
                </div>
                <h4>{skills[8].skill}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   <div className="about-me">
        <div className="about-me-intro">
          <div className="info-container">
            <p>
              Hi! My name is John and I graduated from Drexel University with a
              Bachelor's degree in Computer Science in 2020. During my time
              there, I've had a co-op at{" "}
              <Link
                linkTo="https://www.upenn.edu/"
                text="a prestigeous university"
              />{" "}
              and two at{" "}
              <Link
                linkTo="https://corporate.comcast.com/"
                text="one of the largest media conglomerates"
              />
              , all of which gave me the opportunity to gain experience and
              learn so much about front-end and back-end development!
            </p>
          </div>
          <div className="headshot-container">
            <img className="headshot" src="assets/headshot.jpg" alt="" />
          </div>
        </div>

        <div className="skills">
          <h2 className="skills-subheader-text">Skills</h2>
          <div className="info-container">
            <p>
              My academic and professional experiences so far have allowed me to
              work with a wide variety of programming languages and software, so
              I'm always prepared.
            </p>
          </div>
          <div className="skills-display">
            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[0].logo} alt="" />
                </div>
                <h4>{skills[0].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[1].logo} alt="" />
                </div>
                <h4>{skills[1].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[2].logo} alt="" />
                </div>
                <h4>{skills[2].skill}</h4>
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[3].logo} alt="" />
                </div>
                <h4>{skills[3].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[4].logo} alt="" />
                </div>
                <h4>{skills[4].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[5].logo} alt="" />
                </div>
                <h4>{skills[5].skill}</h4>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[6].logo} alt="" />
                </div>
                <h4>{skills[6].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[7].logo} alt="" />
                </div>
                <h4>{skills[7].skill}</h4>
              </div>
              <div className="skill-container">
                <div className="skill-logo-container">
                  <img className="skill-logo" src={skills[8].logo} alt="" />
                </div>
                <h4>{skills[8].skill}</h4>
              </div>
            </div>
          </div>
        </div> 
      </div>*/}
    </div>
  );
}
