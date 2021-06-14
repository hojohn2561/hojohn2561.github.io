import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.min.css";
import "./experience.scss";

const experiences = [
  {
    id: "comcast2",
    position: "App Developer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2019",
    responsibilities: [
      "Designed and developed a Google Assistant prototype app so users could schedule customizable meetings with their team members using their voice",
      "Incorporated other APIs in Google’s ecosystem in order to provide a more personalized experience for the user when interacting with the app",
      "Created a fully functioning mock-up of the app being integrated into Comcast’s existing Ruby app",
    ],
    logo: "assets/comcast business logo.png",
  },
  {
    id: "comcast1",
    position: "Software Engineer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2018",
    responsibilities: [
      "Revamped the NGAN team’s existing, but nonfunctioning, PCMS tool in order to automate the process of generating configuration files for vCMTS deployments, while improving its efficiency by 90%",
      "Developed and maintained the PCMS tool’s front-end and back-end features while continuing to meet the rolling requirements discussed in meetings with the stakeholders",
    ],
    logo: "assets/comcast logo.png",
  },
  {
    id: "upenn",
    position: "Programmer Analyst Co-op",
    employer: "University of Pennsylvania",
    datesWorked: "April - September 2017",
    responsibilities: [
      "Designed and developed an automated script to parse real-time technology usage data and converting it to a Munin graph, allowing developers to have a more targeted software development approach",
      "Performed penetration testing, regression testing, and usability testing on UPenn’s WebLogin to ensure successful deployments to the production environment",
      "Led UPenn’s effort to migrate from Cosign SSO to Shibboleth by automating the process of finding unused Cosign registrations and informing the service owners about the migration",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experiences-container" id="experience">
      <ScrollAnimation
        animateOnce
        animateIn="animate__animated animate__slideInLeft"
      >
        <h1>My Experience.</h1>
      </ScrollAnimation>

      <ScrollAnimation
        animateOnce
        animateIn="animate__animated animate__slideInUp"
        delay={250}
      >
        <div className="my-experiences">
          {experiences.map((experience) => (
            <div
              className="experience-card-container"
              key={`${experience.employer} ${experience.position}`}
            >
              <div className="experience-card">
                <div className="experience-card-front">
                  <div className="experience-header">
                    <h2>{experience.employer}</h2>
                    <h3>{experience.position}</h3>
                  </div>
                  <h3 className="dates-worked">{experience.datesWorked}</h3>
                  {/* <img src={experience.logo} alt="" className="experience-logo" /> */}
                </div>
                <div className="experience-card-back">
                  <h3>Responsibilities</h3>
                  <ul className="responsibility-list">
                    {experience.responsibilities.map((responsibilty, index) => (
                      <li
                        className="responsibilty"
                        key={`${experience.employer} ${experience.position} ${index}`}
                      >
                        {responsibilty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}
