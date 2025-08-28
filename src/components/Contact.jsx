import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../style/Contact.css";

function Contact() {
  const [status, setStatus] = useState(""); // Tracks form submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple clicks

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        {/* Success/Error Message */}
        {status && (
          <p className={`status-message ${status.includes("✅") ? "success" : "error"}`}>
            {status}
          </p>
        )}
      </div>

      {/* Right - Social Links & Location */}
      <div className="contact-info">
        <h2>Let's Connect</h2>
        <p><FaMapMarkerAlt /> Sangamner, India</p>
        <p><FaEnvelope /> bhumikadchitte5@gmail.com</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bhumika-chitte-0759012a0" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bhumikadchitte5" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/bhumika_chitte5" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
