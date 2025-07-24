// src/components/CallToAction/CallToAction.js
import React from 'react';
import './CallToAction.css'; // Optional styling file

const CallToAction = () => {
  return (
    <footer className="call-to-action" id="connect">
      <h2>📬 Let’s Connect & Collaborate</h2>
      <p>
        Whether you're seeking resilient architecture, high-performance engineering teams, or strategy that scales—I'm always open to meaningful conversations and forward-looking opportunities.
      </p>
      <p>
        Explore my work on{' '}
        <a href="https://github.com/KrazKjn" target="_blank" rel="noopener noreferrer">GitHub</a>, connect via{' '}
        <a href="https://linkedin.com/in/MarkHoganInLa" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or{' '}
        <a href="mailto:Mark.Hogan.La@outlook.com">email me</a> directly to discuss how we can build systems that empower users and outlast trends.
      </p>
      <p><em>Let’s create something that matters.</em></p>
    </footer>
  );
};

export default CallToAction;