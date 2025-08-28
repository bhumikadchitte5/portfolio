import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectSection from "./components/Project";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";  
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <div className="divider"></div>
      <h1 className="section-heading">About</h1>
      <section id="about"><About /></section>
      <div className="divider"></div>
      <h1 className="section-heading">Skills</h1>
      <section id="skills"><Skills /></section>
      <div className="divider"></div>
      <h1 className="section-heading">Projects</h1>
      <section id="projects"><ProjectSection /></section>
      <div className="divider"></div>
      <h1 className="section-heading">Education</h1>
      <section id="education"><Education /></section>
      <div className="divider"></div>
      <h1 className="section-heading">Achievements</h1>
      <section id="achievements"><Achievements /></section>
      <div className="divider"></div>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer/> </section>
    </>
  );
}

export default App;


