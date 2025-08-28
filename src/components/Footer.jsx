import React from "react";
import "../style/Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Bhumika Chitte. 
      </p>
    </footer>
  );
}

export default Footer;
