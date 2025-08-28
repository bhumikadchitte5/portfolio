import React from "react";
import "../style/Achievements.css";
import Achievement_img from "../asset/Achievement_img.png"; // Ensure correct path
import { FaCheckCircle } from "react-icons/fa"; // Import Done/Check icon

function Achievements() {
  return (
    <div className="achievements">
      <div className="achievements-img">
        <img src={Achievement_img} alt="Achievements" />
      </div>

      {/* Right Side: Achievements List */}
      <div className="achievements-list">
        <ul>
          <li>
            <FaCheckCircle className="check-icon" /> <p>3 <sup>rd</sup> Rank in Tech-Fusion Competition</p>
          </li>
          <li>
            <FaCheckCircle className="check-icon" /><p>3 <sup>rd</sup> Rank in AI visionaries Competition</p>

          </li>
          <li>
            <FaCheckCircle className="check-icon" /><p>3 <sup>rd</sup>Rank in Sumedh’s Coding Competition</p>

          </li>
          <li>
            <FaCheckCircle className="check-icon" /><p>2 <sup>nd</sup>  Rank in PBL Competion</p>

          </li>
          <li>
            <FaCheckCircle className="check-icon" /> <p>SIH 2024 Finalist</p>
          </li>
          <li>
            <FaCheckCircle className="check-icon" /> <p>Participated in 4+ National Level Hackathons</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
