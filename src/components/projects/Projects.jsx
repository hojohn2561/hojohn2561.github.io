import { Carousel } from "react-responsive-carousel";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projects.scss";

const projects = [
  {
    id: "tcgAssistant",
    name: "TCG Assistant",
    position: "Full Stack Developer",
    datesWorked: "February 2021 - Present",
    description:
      "A cross-platform mobile application that allows users to easily track their trading card collection, discover new cards, and view price history of cards. " +
      "Users can also create a wishlist, set alerts for cards so they can be notified when they reach a certain price, and more.",
    features: [
      {
        id: 0,
        demo: (
          <>
            <img
              alt="TCG Assistant Regsiter Screenshot"
              className="phone-screenshot phone-1-2"
              src="assets/register.png"
            />
            <img
              alt="TCG Assistant Login Screenshot"
              className="phone-screenshot phone-2-2"
              src="assets/login.png"
            />
          </>
        ),
        explanation:
          "Your personalized data is saved and can be accessed anywhere with Google's Firebase authentication!",
      },
      {
        id: 1,
        demo: (
          <>
            <img
              alt="TCG Assistant Quick Add Screenshot"
              className="phone-screenshot diagonal-1"
              src="assets/quick add.png"
            />
            <img
              alt="TCG Assistant Quick Buttons Screenshot"
              className="phone-screenshot diagonal-2"
              src="assets/quick buttons.png"
            />
            <img
              alt="TCG Assistant Set Screenshot 2"
              className="phone-screenshot diagonal-6"
              src="assets/set screen 2.png"
            />
            <img
              alt="TCG Assistant Quick Remove Screenshot"
              className="phone-screenshot diagonal-4"
              src="assets/quick remove.png"
            />
            <img
              alt="TCG Assistant Collected Screenshot 1"
              className="phone-screenshot diagonal-3"
              src="assets/collected 1.png"
            />
            <img
              alt="TCG Assistant Set Screenshot 1"
              className="phone-screenshot diagonal-5"
              src="assets/set screen 1.png"
            />
          </>
        ),
        explanation:
          "Spend more time collecting, and less time managing, with Quick Add and Quick Remove buttons!",
      },
      {
        id: 2,
        demo: (
          <>
            <img
              alt="TCG Assistant Price History Screenshot 1"
              className="phone-screenshot phone-1-2"
              src="assets/price history 1.png"
            />
            <img
              alt="TCG Assistant Price History Screenshot 2"
              className="phone-screenshot phone-2-2"
              src="assets/price history 2.png"
            />
          </>
        ),
        explanation:
          "Know the best time to purchase a card with up-to-date price history!",
      },
      {
        id: 3,
        demo: (
          <>
            <img
              alt="TCG Assistant Alert Screenshot 1"
              className="phone-screenshot diagonal-1"
              src="assets/alert1.png"
            />
            <img
              alt="TCG Assistant Alert Screenshot 2"
              className="phone-screenshot diagonal-2"
              src="assets/alert2.png"
            />
            <img
              alt="TCG Assistant Set Screenshot 2"
              className="phone-screenshot diagonal-3"
              src="assets/set screen 2.png"
            />
            <img
              alt="TCG Assistant Alert Screenshot 3"
              className="phone-screenshot diagonal-4"
              src="assets/alert3.png"
            />
            <img
              alt="TCG Assistant Category Cards Screenshot 1"
              className="phone-screenshot diagonal-5"
              src="assets/category cards 1.png"
            />
            <img
              alt="TCG Assistant Set Screenshot 2"
              className="phone-screenshot diagonal-6"
              src="assets/set screen 1.png"
            />
          </>
        ),
        explanation:
          "Get alerted when your favorite cards reach a price that satisfies you!",
      },
      {
        id: 4,
        demo: (
          <>
            <img
              alt="TCG Assistant Discover Screenshot 1"
              className="phone-screenshot phone-1-3"
              src="assets/discover 1.png"
            />
            <img
              alt="TCG Assistant Discover Screenshot 2"
              className="phone-screenshot phone-2-3"
              src="assets/discover 2.png"
            />
            <img
              alt="TCG Assistant Discover Screenshot 3"
              className="phone-screenshot phone-3-3"
              src="assets/discover 3.png"
            />
          </>
        ),
        explanation: "Discover new cards!",
      },
    ],
    technologiesUsed: ["React Native", "Node.js", "Firebase"],
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

      {/* ================================================== TCG Assistant ================================================== */}
      <ScrollAnimation
        animateOnce
        animateIn="animate__animated animate__slideInUp"
        delay={500}
      >
        <div className="my-projects">
          <div className="project">
            <div className="project-carousel">
              <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                emulateTouch // Enable swipe on non-touch screens when swipeable is true.
                infiniteLoop // Going after the last item will move back to the first slide
                swipeable
              >
                <div className="carousel-item-container">
                  <div className="carousel-title-content">
                    <div className="project-overview">
                      <h2>{projects[0].name}</h2>
                      <h4>
                        A cross-platform mobile app that allows you to track and
                        expand your trading card collection like never before.
                        Simple ways to add and remove cards to and from your
                        collection, add cards to your wishlist, get alerted when
                        a card reaches your set price, view a card's price
                        history, discover cards based on categories, and more.
                      </h4>
                      <h4>Coming soon to Google Play and Apple App store.</h4>
                      <h4>
                        React <span /> Node.js <span /> Firebase
                      </h4>
                    </div>
                  </div>
                </div>
                {projects[0].features.map((feature) => (
                  <div
                    className="carousel-item-container"
                    key={feature.explanation}
                  >
                    <div className="carousel-item-content">
                      {feature.demo}
                      <div className="carousel-item-description-container">
                        <p className="carousel-item-description">
                          {feature.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
