import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, ExternalLink, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { portfolioData } from './portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Curriculum Vitae / Resume</h3>
            <span
              style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.15)',
                color: 'var(--accent-primary)',
                fontWeight: 600
              }}
            >
              CS Student
            </span>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '72vh', overflowY: 'auto' }}>
          {/* Header */}
          <div
            style={{
              borderBottom: '2px solid var(--border-subtle)',
              paddingBottom: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{portfolioData.personal.name}</h1>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>
              {portfolioData.personal.role}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.2rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} color="var(--accent-primary)" /> {portfolioData.personal.email}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="var(--accent-primary)" /> {portfolioData.personal.location}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Globe size={14} color="var(--accent-primary)" /> {portfolioData.personal.graduation}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <div className="resume-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={18} /> Education
            </div>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.98rem' }}>
                  <span>{edu.degree}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.period}</span>
                </div>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  {edu.institution} • <strong>{edu.gpa}</strong>
                </div>
                {edu.honors && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', marginBottom: '0.4rem' }}>
                    ★ {edu.honors}
                  </p>
                )}
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <strong>Coursework:</strong> {edu.coursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <div className="resume-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={18} /> Technical Skills
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
              <div>
                <strong>Languages: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {portfolioData.skills.languages.map((s) => s.name).join(', ')}
                </span>
              </div>
              <div>
                <strong>Frontend: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {portfolioData.skills.frontend.map((s) => s.name).join(', ')}
                </span>
              </div>
              <div>
                <strong>Backend & Databases: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {portfolioData.skills.backend.map((s) => s.name).join(', ')}
                </span>
              </div>
              <div>
                <strong>Tools & Systems: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {portfolioData.skills.tools.map((s) => s.name).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <div className="resume-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} /> Leadership & Experience
            </div>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.98rem' }}>
                  <span>{exp.role}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{exp.period}</span>
                </div>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                  {exp.organization} ({exp.location})
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '0.25rem' }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Honors & Certifications */}
          <div className="resume-section">
            <div className="resume-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} /> Honors & Certifications
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
              {portfolioData.achievements.map((item, idx) => (
                <div key={idx} style={{ padding: '0.6rem', background: 'var(--bg-tertiary)', borderRadius: '6px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</div>
                  <div style={{ color: 'var(--accent-primary)', fontSize: '0.78rem' }}>{item.issuer} ({item.date})</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={handlePrint} className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Printer size={15} /> Print / Save PDF
          </button>
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
