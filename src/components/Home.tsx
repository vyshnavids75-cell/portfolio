import React from "react";
import './styles/Home.css';
import Footer from "./Footer";
import VyshnaviImage from "../assets/images/Vyshnavi_image.jpg";

interface HomeProps { /*Home receives navigateTo as a prop*/
    navigateTo: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
    return (
        <section className="home">
            <div className="home-wrapper">

                <div className="home-left">
                    <span className="home-role">SOFTWARE DEVELOPER</span>

                    <h1 className="home-title">
                        Hi, I'm Vyshnavi D S
                    </h1>

                    <p className="home-description">
                        Welcome to my portfolio — a brief overview of my work. I’m a software developer who builds elegant, accessible and
                        high-performance web applications with strong attention to user
                        experience and clean design. I focus on writing scalable, maintainable code that delivers real-world impact.
                    </p>

                    <button className="home-button" onClick={() => navigateTo("projects")}>View All Works</button>
                </div>

                <div className="home-center">
                    <div className="home-blob">
                        <img src={VyshnaviImage} alt="Vyshnavi_Image" />
                    </div>
                </div>
            </div>

            <div className="home-skills">
                <div className="skill">
                    <h4>Frontend Development</h4>
                </div>

                <div className="skill">
                    <h4>UI Engineering</h4>
                </div>

                <div className="skill">
                    <h4>Backend Development & Databases</h4>
                </div>

                <div className="skill">
                    <h4>Problem Solving</h4>
                </div>
            </div>

                <Footer />

        </section>
    );
}

export default Home;