import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './LegacyProfileDocument.css'; // Optional scoped styles

const LegacyProfileDocument = () => {
  useEffect(() => {
    document.title = 'Legacy & Problem Solving Addenda';
  }, []);

  return (
    <div className="container py-4">
      <GitHubLink filePath="pages/LegacyProfileDocument/LegacyProfileDocument.jsx" />

      <h1 className="mb-3">Legacy & Problem Solving Addenda</h1>
      <p>
        Download or view supplemental documents related to legacy systems engineering and problem solving profiles.
      </p>

      <ul className='custom-list'>
        <li>
          <a
            className="btn btn-outline-primary mb-2"
            href="assets/files/2025 - Resume - Legacy Technology.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infrastructure Legacy Systems Engineering Addendum (PDF)
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline-primary mb-2"
            href="assets/files/2025 - Resume - Problem Solving Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Problem Solving Profile (PDF)
          </a>
        </li>       

        <li>
          <Link className="nav-link" to="/infrastructure-legacy-systems-engineering-addendum">
            <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span>{' '}
            Infrastructure Legacy Systems Engineering Addendum
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/problem-solving-profile">
            <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span>{' '}
            Problem Solving Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegacyProfileDocument;
