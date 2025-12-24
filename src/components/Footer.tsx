import React from "react";
import "./styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
       <p>© {new Date().getFullYear()} Vyshnavi D S. All rights reserved.</p>
    </footer>
 
  )
}

export default Footer;