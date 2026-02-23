import React from "react";


function About() {
  return (
    <>
    <section id="about">
    <div className="about-section">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img
            src="https://picsum.photos/600/400"
            alt="About"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p>
            We are a passionate team dedicated to delivering high-quality
            products and services. Our mission is to create innovative
            solutions that make life easier and better.
          </p>

          <p>
            With years of experience and a strong commitment to excellence,
            we strive to exceed customer expectations and build long-term
            relationships.
          </p>

          <p>
            Our vision is to grow continuously while maintaining the highest
            standards of professionalism and integrity.
          </p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default About;