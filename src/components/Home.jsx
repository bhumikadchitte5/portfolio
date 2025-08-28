import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import '../style/Home.css';
import myCV from "../asset/Bhumika_Chitte_CV.pdf";

function Home() {
  return (
    <section className="home">
      <h1>
        Hello, It's me <span className="highlight">Bhumika Chitte</span>,<br />
        I'm a <span className="highlight">Computer Engineering Student</span>.
      </h1>
      <div className="social-icons">
        <a href="https://github.com/bhumikadchitte5"><FaGithub /></a>
        <a href="https://www.instagram.com/bhumika_chitte5"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/bhumika-chitte-0759012a0"><FaLinkedin /></a>
      </div>

      <div className="button-container">
        <button className="button contact-btn"><a href="#contact">Contact Me</a></button>
        <button className="button cv-btn">
          <a href={myCV} download="Bhumika_Chitte_CV.pdf" target="_blank" rel="noopener noreferrer">My CV</a>
        </button>
      </div>
      
    </section>
  );
}

export default Home;
