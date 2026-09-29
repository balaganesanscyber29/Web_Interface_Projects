import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-category-pill" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '1.35rem' }}>{project.title}</h3>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
            {project.tagline}
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} color="var(--accent-primary)" /> Key Engineering Highlights
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} color="var(--accent-primary)" /> Tech Stack & Libraries
            </h4>
            <div className="project-tech-list">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub Repo</span>
          </a>
          <button
            onClick={() => {
              alert(`Launching demo simulator for ${project.title}! In a live environment, this connects to the hosted app.`);
            }}
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} />
            <span>Live Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
