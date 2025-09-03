import React, { useContext, useEffect } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './Software.css'; // Optional scoped styles
import { SiteConfigContext } from '../../context/SiteConfigContext';

const Software = () => {
  const gitHubLinkUrl = 'pages/Software/Software.jsx';

  useEffect(() => {
    document.title = 'Software Engineering & Automation';
  }, []);

  const config = useContext(SiteConfigContext);

  if (!config) return null;

  return (
    <div className="container py-4">
      <GitHubLink filePath={gitHubLinkUrl} />

      <h1 className="mb-3">🖥 Software Engineering & Automation</h1>
      <p className="lead">Smart solutions, built for scale and clarity.</p>

      <h3>Capabilities</h3>
      <ul className='custom-list'>
        <li>Web app development (Blazor, React)</li>
        <li>API integrations, backend systems</li>
        <li>Refactoring VSTO add-ins and legacy tools</li>
        <li>Custom automation scripts and bots</li>
      </ul>

      <h3>Use Cases</h3>
      <ul className='custom-list'>
        <li>Migrating Outlook plugins to web</li>
        <li>Building cross-platform web dashboards</li>
        <li>Automating multi-source data flows</li>
      </ul>

      <a
        className="btn btn-primary btn-lg mt-4"
        href={`mailto:${config.contactEmail}?subject=Software%20Engineering%20Inquiry`}
      >
        Start your next build with confidence
      </a>
    </div>
  );
};

export default Software;
