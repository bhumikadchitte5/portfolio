import React, { useState } from "react";
import "../style/skills.css";
import { FaCode, FaServer, FaTools, FaUserTie } from "react-icons/fa";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skillsData = {
    Frontend: [
      { name: "HTML5"},
      { name: "CSS " },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Bootstrap" },
    ],
    Backend: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "SQL" },
    ],
    Tools: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Eclipse" },
    ],
    SoftSkills: [
      { name: "Communication" },
      { name: "Teamwork"},
      { name: "Problem Solving" },
      { name: "Leadership"},
    ],
  };

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        {/* Left Section - Skill Categories */}
        <div className="skills-categories">
          <div
            className={`skill-card ${selectedCategory === "Frontend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Frontend")}
          >
            <FaCode className="icon" />
            <p>Frontend</p>
          </div>
          <div
            className={`skill-card ${selectedCategory === "Backend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Backend")}
          >
            <FaServer className="icon" />
            <p>Backend</p>
          </div>
          <div
            className={`skill-card ${selectedCategory === "Tools" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Tools")}
          >
            <FaTools className="icon" />
            <p>Tools</p>
          </div>
          <div
            className={`skill-card ${selectedCategory === "SoftSkills" ? "active" : ""}`}
            onClick={() => setSelectedCategory("SoftSkills")}
          >
            <FaUserTie className="icon" />
            <p>Soft Skills</p>
          </div>
        </div>

        {/* Right Section - Skills with Progress Bars */}
        <div className="skills-details">
          <h3>{selectedCategory}</h3>
          {skillsData[selectedCategory].map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name">
                <p>{skill.name}</p>
                <p>{skill.level}</p>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
