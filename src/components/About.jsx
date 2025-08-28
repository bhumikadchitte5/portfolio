import React from 'react';
import myImage from '../asset/myimage.jpg'; // ✅ Import the image

import '../style/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src={myImage} alt="Bhumika Chitte" />
      </div>

      <div className="about-info">
        <p>
          Hi, I'm <span className="highlight">Bhumika Dinesh Chitte</span>, a passionate web developer and
          programmer with expertise in Java, Python, and database management.I
          am also passionate about exploring FPGA and IoT systems, working on
          innovative solutions that integrate hardware and software for
          real-world applications. I enjoy building efficient, scalable, and
          user-friendly applications, whether it's a dynamic website, a backend
          system, or a data-driven project.I enjoy solving real-world problems
          using technology and automation. Always eager to learn and explore new
          ideas, I aim to create efficient and user-friendly solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
