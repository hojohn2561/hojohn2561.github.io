import React from "react";
import "./experience.scss";

const experiences = [
  {
    id: "comcast2",
    position: "Business App Developer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2019",
    responsibilities: [
      "Designed and developed a Google Action prototype that allowed users to schedule customizable meetings with their team members, using their voice",
      "Utilized and connected various Google APIs in order to provide a more personalized experience for the user when interacting with the Action",
      "Created a mock-up of the Action being integrated into Comcast's existing Ruby app, with a fully functioning U.I. and existing Google Assistant features using Google's Dialogflow API",
    ],
    logo: "assets/comcast business logo.png",
  },
  {
    id: "comcast1",
    position: "Software Engineer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2018",
    responsibilities: [
      "Revamped the existing PCMS tool to improve efficiency by 90% and and support automating the process of generating configuration files for vCMTS deployments",
      "Developed and maintained new PCMS tool front-end and back-end features to increase the NGAN team’s productivity and satisfied new rolling requirements discussed in meetings",
      "Automated the process of creating configuration files from templates and configlets for stakeholders",
    ],
    logo: "assets/comcast logo.png",
  },
  {
    id: "upenn",
    position: "Programmer Analyst Co-op",
    employer: "University of Pennsylvania",
    datesWorked: "April - September 2017",
    responsibilities: [
      "Designed and developed an automated script to output real-time technology usage data on people accessing UPenn’s services to allow for a more targeted software development approach",
      "Performed penetration testing, regression testing, and usability testing on WebLogin to ensure successful deployments to the production environment",
      "Led UPenn’s effort to migrate from Cosign SSO to Shibboleth by automating the process of finding unused Cosign registrations and informing the service owners about the migration",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experiences-container" id="experience">
      <h1>My Experience.</h1>
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
                {/* <img src={experience.logo} alt="" className="experience-logo" /> */}
                <h3 className="dates-worked">{experience.datesWorked}</h3>
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
    </div>
  );
}
