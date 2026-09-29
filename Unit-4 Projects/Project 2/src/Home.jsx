import React from 'react';
import { Link } from 'react-router-dom';
import { myDetails } from './portfolioData';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-name">{myDetails.name}</h1>
        <p className="hero-title">{myDetails.title}</p>
        <p className="hero-bio">{myDetails.shortBio}</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </div>

      {/* Featured Projects Section */}
      <h2 className="section-heading">Featured Projects</h2>
      <div className="projects-list">
        {myDetails.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-header">
              <h3 className="project-card-title">{project.title}</h3>
            </div>
            <p className="project-card-desc">{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
