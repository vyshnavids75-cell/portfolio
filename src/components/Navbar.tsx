import React, { useState } from "react";
import './styles/Navbar.css';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
   const [active, setActive] = useState("home");

   const navigateTo = (section: string) => {
      setActive(section);
   }

   return (
      <>
         <nav className="side-navbar">
            <div className="side-navbar-logo">Vyshnavi D S</div>

            <ul className="side-navbar-links">
               <li>
                  <span
                     className={active === "home" ? "active" : ""}
                     onClick={() => setActive("home")}
                  >
                     Home
                  </span>
               </li>

               <li>
                  <span
                     className={active === "about" ? "active" : ""}
                     onClick={() => setActive("about")}
                  >
                     About
                  </span>
               </li>

               <li>
                  <span
                     className={active === "skills" ? "active" : ""}
                     onClick={() => setActive("skills")}
                  >
                     Skills
                  </span>
               </li>

               <li>
                  <span
                     className={active === "projects" ? "active" : ""}
                     onClick={() => setActive("projects")}
                  >
                     Projects
                  </span>
               </li>

               <li>
                  <span
                     className={active === "contact" ? "active" : ""}
                     onClick={() => setActive("contact")}
                  >
                     Contact
                  </span>
               </li>
            </ul>

            <div className="side-navbar-github">
               <FaGithub size={23} color="#2a0f52" style={{ position: "relative", top: "0.5rem", right: "0.7rem" }} />
               <button className="side-navbar-button" onClick={() => window.open("https://github.com/vyshnavids75-cell", "_blank")}>View GitHub</button>
            </div>

         </nav>

         {/* we have to use the same variable name in setActive and active, then only it works */}

         {active === "home" && <Home navigateTo={navigateTo} />} {/*passing navigateTo as prop to Home from Navbar */}
         {active === "about" && <About />}
         {active === "skills" && <Skills />}
         {active === "projects" && <Projects />}
         {active === "contact" && <Contact />}
      </>
   )
}

export default Navbar;