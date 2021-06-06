import { useState } from "react";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import HorizontalRow from "./components/horizontalRow/HorizontalRow";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

import "./app.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={(updatedIsMenuOpen) => setIsMenuOpen(updatedIsMenuOpen)}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Intro />
      <About />
      <HorizontalRow />
      <Experience />
      <HorizontalRow />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
