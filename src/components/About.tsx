import React from "react";
import "./styles/About.css";
import Footer from "./Footer";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">Professional Summary</h2>

        <h3 className="about-subtitle">Software Developer at ZeroNorth, Chennai, India (formerly Alpha Ori Technologies)</h3>

        <p className="about-text">
          I hold a <strong>B.Tech in Computer Science</strong> and have over{" "}
          <strong>2 years of hands-on experience</strong> in software development.
          I began my professional journey with a 6-month internship at{" "}
          <strong>Alpha Ori Technologies, Chennai, India</strong>, where I gained practical
          experience working on real-world applications and developed a strong
          foundation in software engineering.
        </p>

        <p className="about-text">
          After completing my internship, I became a permanent software
          developer at Alpha Ori Technologies. Subsequently, the company merged
          with <strong>ZeroNorth, Chennai</strong>, where I continue to work as a software
          developer. I am currently involved in building enterprise-level
          applications using <strong>Angular, Node.js, and Datastax</strong>,
          with a focus on scalability, performance, and clean architecture.
        </p>

        <p className="about-text">
          Alongside my professional work, I actively upskill myself by learning{" "}
          <strong>React and MongoDB</strong> to broaden my technical expertise.
          I enjoy solving complex problems, writing clean and maintainable code,
          and collaborating with cross-functional teams to deliver reliable,
          user-centric solutions.
        </p>

        <p className="about-text">
          I am driven by continuous learning and a passion for building impactful
          software that creates meaningful user experiences.
        </p>
      </div>

        <Footer />

    </section>
  );
}

export default About;