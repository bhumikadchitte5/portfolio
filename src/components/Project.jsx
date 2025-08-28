import React from "react";
import "../style/Project.css";

const projects = [
  {
    title: "Algorithm Visualizer",
    role: "Full Stack Developer",
    techStack: ["HTML", "Javascript","PHP", "CSS"],
    description: "A tool to visualize sorting and Searching algorithms interactively.",
  },
  {
    title: "Drug Response Prediction",
    role: "Developer",
    techStack: ["Python", "TensorFlow", "Pandas","Sk-learn"],
    description: "Predicts drug response for personalized medicine using deep learning.",
  },
  {
    title: "Gunshot Detection System",
    role: "Embedded Systems Developer",
    techStack: ["FPGA","Arduino", "Verilog","Python", "Matplotlib"],
    description: "Detects gunshots and determines direction using TDOA with 4 microphones.",
  },
  {
    title: "Python API Project",
    role: "Backend Developer",
    techStack: ["Python ,PostmanAPI"],
    description: "Developed a high-performance REST API with Python, implementing CRUD operations.",
  },
  {
    title: "Paperless Transparent College System",
    role: "Backend Developer",
    techStack: ["(MERN Stack) MongoDB, Express.js, React, Node.js"],
    description: "A digital system for managing college processes such as voting, complaints, and budgeting. Ensures transparency by integrating real-time data updates, role-based dashboards, and an intuitive UI for students, teachers, and parents.",
  },
  {
    title: "Senti-AI",
    role: "Full Stack Developer",
    techStack: ["(MERN Stack) MongoDB, Express.js, React, Node.js"],
    description: "A digital system for sentiment analysis using AI. It analyzes user sentiments from user comments and provides insights through a user-friendly dashboard.",
  },
];

const ProjectSection = () => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-block">
          <div className="project-content">
            <h2>{project.title}</h2>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
