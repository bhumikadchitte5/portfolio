import React from "react";
import "../style/Education.css";
import Education_img from "../asset/Education_img.png"; // Ensure correct path

function Education() {
  return (
    <div className="education">
      {/* Left Side: Education Image */}
      <div className="education-img">
        <img src={Education_img} alt="Education" />
      </div>

      {/* Right Side: Education Details */}
      <div className="education-info">
        <div className="edu-box">
          <h3>Bachelor of Computer Engineering </h3>
          <p>Amrutvahini College of Engineering | 2023 - 2026</p>
        </div>

        <div className="edu-box">
          <h3>Diploma in Computer Engineering</h3>
          <p>S.M.D.R Government Polytechnic, Dhule | 2020 - 2023</p>
        </div>

        <div className="edu-box">
          <h3>Secondary School (10th)</h3>
          <p>Janta Highschool | 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
