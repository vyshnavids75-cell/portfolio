import React from "react";
import "./styles/Skills.css";
import Footer from "./Footer";

const Skills: React.FC = () => {
    return (
        <section className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <div className="skills-container">
                <div className="skills-category">
                    <h3>Frontend Development</h3>
                    <p>HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular, React</p>
                </div>
                <div className="skills-category">
                    <h3>Backend Development</h3>
                    <p>Node.js, Express</p>
                </div>

                <div className="skills-category">
                    <h3>Database Technologies</h3>
                    <p>MongoDB, Datastax</p>
                </div>

                <div className="skills-category">
                    <h3>Tools & Utilities</h3>
                    <p>Git, VS Code, Postman, npm</p>
                </div>

                <div className="skills-category">
                    <h3>Soft Skills / Workflow</h3>
                    <p>Collaboration, Problem-solving, Agile Methodology, Adaptability, Time Management</p>
                </div>

            </div>

            <div className="skills-description">
                <p>
                    I have hands-on experience building responsive and dynamic web applications
                    using modern frontend frameworks like {" "}<strong>Angular</strong> and {""}
                    <strong>React</strong>. On the backend, I develop scalable APIs with {" "}
                    <strong>Nodejs</strong>  and {" "}<strong>Express</strong> , and manage data efficiently
                    using MongoDB and Datastax. I am also comfortable with essential development
                    tools such as {" "} <strong>Git</strong> for version control, {" "}<strong>
                        VS Code</strong> for coding, and {" "} <strong>Postman</strong> for API
                    testing. Continuously learning and experimenting with new technologies, I
                    strive to write clean, maintainable code and deliver high-quality software solutions.
                </p>
            </div>

            <Footer />

        </section>
    )
}
export default Skills;