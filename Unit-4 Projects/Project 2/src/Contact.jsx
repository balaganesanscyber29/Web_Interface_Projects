import React, { useState } from 'react';
import { myDetails } from './portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="container">
      <h1 className="page-title">Contact Me</h1>
      <p className="page-subtitle">Feel free to reach out for collaborations, projects, or questions!</p>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info-box">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>
            My Contact Details
          </h2>

          <ul className="contact-list">
            <li>
              <div className="contact-item-title">Email</div>
              <div className="contact-item-value">
                <a href={`mailto:${myDetails.email}`}>{myDetails.email}</a>
              </div>
            </li>

            {myDetails.phone && (
              <li>
                <div className="contact-item-title">Phone</div>
                <div className="contact-item-value">{myDetails.phone}</div>
              </li>
            )}

            <li>
              <div className="contact-item-title">Location</div>
              <div className="contact-item-value">{myDetails.location}</div>
            </li>

            <li>
              <div className="contact-item-title">Professional Profiles</div>
              <div className="contact-item-value" style={{ display: 'flex', gap: '1.25rem', marginTop: '0.4rem' }}>
                {myDetails.github && (
                  <a href={myDetails.github} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                    GitHub ↗
                  </a>
                )}
                {myDetails.linkedin && (
                  <a href={myDetails.linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                    LinkedIn ↗
                  </a>
                )}
                {myDetails.twitter && (
                  <a href={myDetails.twitter} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                    Twitter ↗
                  </a>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Message Form */}
        <div className="contact-form">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>
            Send a Message
          </h2>

          {sent && (
            <div className="alert-success">
              ✓ Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
