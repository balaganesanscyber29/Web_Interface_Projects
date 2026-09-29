import React from 'react';
import { Link } from 'react-router-dom';
import { myDetails } from './portfolioData';

export default function About() {
  return (
    <div className="container">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">Get to know my background, education, and skills.</p>

      {/* Bio Card */}
      <div className="about-card">
        <p className="about-text">{myDetails.aboutMe}</p>
      </div>

      {/* Education Section */}
      <h2 className="section-heading">Education</h2>
      <div className="about-card">
        {myDetails.education.map((edu, index) => (
          <div key={index} className="edu-item">
            <div className="edu-header">
              <span className="edu-degree">{edu.degree}</span>
              <span className="edu-year">{edu.year}</span>
            </div>
            <div className="edu-school">{edu.school}</div>
            <p className="edu-desc">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="section-heading">My Skills</h2>
      <div className="skills-grid">
        {myDetails.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-bullet">•</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', color: '#64748b' }}>
          Have a question or want to work together?
        </p>
        <Link to="/contact" className="btn btn-primary">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
