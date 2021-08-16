import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import ExperienceCard from "./ExperienceCard";

import "animate.css/animate.min.css";
import "./experience.scss";

const experiences = [
  {
    id: "comcast2",
    position: "App Developer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2019",
    description:
      "My main project during this co-op was to develop a Google Action prototype that would allow my co-workers to schedule meetings with their team members using their voice. The Action was to incorporate various APIs offered in Google's ecosystem so that it could provide a more personalized, connected experience for the user. In addition to being able to schedule a meeting by talking to the Google smart device, the meeting invite would then be added to the user’s calendar, an invite be sent to all the attendees, and they would also be reminded 15 minutes before the meeting started.",
    logo: "assets/comcast business logo.png",
  },
  {
    id: "comcast1",
    position: "Software Engineer Co-op",
    employer: "Comcast",
    datesWorked: "April - September 2018",
    description:
      "My main project during this co-op was to 'bring back to life' the team's existing PCMS tool, which was barely functioning when I first got there. Its purpose was to be able to generate configuration files when given an Excel sheet containing hundreds of IP Address data, but it wasn’t even able to do that. In the end, I was able to provide that functionality while improving its efficiency by 90%, as well as modernize its user interface. Throughout my time there, I developed and maintained its core features (front-end and back-end).",
    logo: "assets/comcast logo.png",
  },
  {
    id: "upenn",
    position: "Programmer Analyst Co-op",
    employer: "University of Pennsylvania",
    datesWorked: "April - September 2017",
    description:
      "During my time at this co-op, I mainly automated scripts that my team used, and other small projects since this was my first experience in the field. However, a project came up where I was able to design and develop an automated script that converted real-time technology usage data on people accessing UPenn's services to a real-time Munin graph, so that the data could be visualized and easily interpreted by others. This allowed the developers to have a more targeted approach in their software development depending on which technologies were used most often.",
    logo: "assets/upenn.svg",
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
        delay={200}
      >
        <div className="my-experiences">
          {experiences.map((experience) => (
            <ExperienceCard
              experience={experience}
              key={`${experience.employer} ${experience.position}`}
            />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}
