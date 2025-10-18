import React from 'react';

function Contact() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Contact</h1>
      <p className="page-intro">
        Let's connect! Feel free to reach out through any of the channels below.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <a href="mailto:ayush@example.com" className="contact-link">
            ayush@example.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🐙</div>
          <h3>GitHub</h3>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            github.com/yourprofile
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🐦</div>
          <h3>Twitter</h3>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            @yourprofile
          </a>
        </div>
      </div>

      <div className="contact-note">
        <p>
          <strong>Open to:</strong> Full-time opportunities, consulting projects, 
          database optimization challenges, and distributed systems collaborations.
        </p>
      </div>
    </div>
  );
}

export default Contact;
