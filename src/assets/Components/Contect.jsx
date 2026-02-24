import React from "react";
import "./Contect.css";

function Contact() {
  return (
    
        <div className="container">
      <div className="contact-inner">
        
        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We would love to hear from you. Whether you have a question
            about services, pricing, or anything else — our team is ready
            to answer all your questions.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>123 Main Street, Your City</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h4>✉ Email</h4>
            <p>info@example.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-card">
          <h3>Send Message</h3>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Write your message..."></textarea>
          <button>Send Now</button>
        </div>

      </div>
      </div>
 
  );
}

export default Contact;