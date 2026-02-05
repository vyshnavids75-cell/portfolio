import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      <main id="scroll-container" className="scroll-container">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
