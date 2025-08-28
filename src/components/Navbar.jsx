
import React, { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };

  return (
    <nav className="container">
      <h3>Portfolio</h3>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sub-container ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("achievements")}>Achievements</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
