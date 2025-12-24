import React from "react";
import "./styles/Contact.css";
import Footer from "./Footer"

const Contact: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h4 className="contact-title">Primary Contact Information</h4>
                <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:vyshnavids75@gmail.com">
                        vyshnavids75@gmail.com
                    </a>
                </div>

                <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+918075246207">+91 8075246207</a>
                </div>
            </div>

            <div className="contact-group">
                <h4 className="contact-group-title">Professional Profiles</h4>

                <div className="contact-item">
                    <span className="contact-label">LinkedIn</span>
                    <a
                        href="https://www.linkedin.com/in/vyshnavi-d-s-2b9a96377"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.linkedin.com/in/vyshnavi-d-s-2b9a96377
                    </a>
                </div>

                <div className="contact-item">
                    <span className="contact-label">GitHub</span>
                    <a
                        href="https://github.com/vyshnavids75-cell"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/vyshnavids75-cell
                    </a>
                </div>
            </div>

            <div className="contact-group">
                <h4 className="contact-group-title">Location</h4>

                <p className="contact-location">
                    Working in Chennai · Based in Kerala
                </p>
            </div>

            <p className="contact-intro">
                Feel free to reach out via email or LinkedIn.
            </p>

                <Footer />
                
        </section>
    )
}

export default Contact;