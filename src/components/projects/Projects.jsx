import "./projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
              className="phone-screenshot phone-1-2"
              src="assets/register.png"
              alt=""
            />
            <img
              className="phone-screenshot phone-2-2"
              src="assets/login.png"
              alt=""
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
              className="phone-screenshot diagonal-1"
              src="assets/quick add.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-2"
              src="assets/quick buttons.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-6"
              src="assets/set screen 2.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-4"
              src="assets/quick remove.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-3"
              src="assets/collected 1.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-5"
              src="assets/set screen 1.png"
              alt=""
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
              className="phone-screenshot phone-1-2"
              src="assets/price history 1.png"
              alt=""
            />
            <img
              className="phone-screenshot phone-2-2"
              src="assets/price history 2.png"
              alt=""
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
              className="phone-screenshot diagonal-1"
              src="assets/alert1.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-2"
              src="assets/alert2.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-3"
              src="assets/set screen 2.png"
              alt=""
              height="650"
            />
            <img
              className="phone-screenshot diagonal-4"
              src="assets/alert3.png"
              alt=""
              height="650"
            />
            <img
              className="phone-screenshot diagonal-5"
              src="assets/category cards 1.png"
              alt=""
            />
            <img
              className="phone-screenshot diagonal-6"
              src="assets/set screen 1.png"
              alt=""
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
              className="phone-screenshot phone-1-3"
              src="assets/discover 1.png"
              alt=""
              width="400"
              height="560"
            />
            <img
              className="phone-screenshot phone-2-3"
              src="assets/discover 2.png"
              alt=""
            />
            <img
              className="phone-screenshot phone-3-3"
              src="assets/discover 3.png"
              alt=""
              width="400"
              height="560"
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
      <h1>My Work.</h1>

      {/* ================================================== TCG Assistant ================================================== */}
      <div className="my-projects">
        <div className="project">
          <div className="project-overview">
            <h2>{projects[0].name}</h2>
            <div className="technologies-used-container">
              {projects[0].technologiesUsed.map((technologyUsed) => (
                <h4 key={technologyUsed}>{technologyUsed}</h4>
              ))}
            </div>
            <div className="app-stores-container">
              <h4>Coming soon to Google Play and Apple App store</h4>
            </div>
          </div>
          <div className="project-carousel">
            <Carousel
              showStatus={false}
              showThumbs={false}
              autoPlay
              emulateTouch // Enable swipe on non-touch screens when swipeable is true.
              infiniteLoop // Going after the last item will move back to the first slide
              swipeable
              interval={7500} // Interval for autoPlay (in milliseconds)
              transitionTime={850} // Duration of the animation of changing slides.
            >
              {projects[0].features.map((feature) => (
                <div
                  className="carousel-item-container"
                  key={feature.explanation}
                >
                  {/* <p>{feature.explanation}</p> */}
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
    </div>
  );
}
