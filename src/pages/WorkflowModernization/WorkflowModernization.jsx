import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './WorkflowModernization.css'; // Optional scoped styles
import { SiteConfigContext } from '../../context/SiteConfigContext';

const WorkflowModernization = () => {
  const gitHubLinkUrl = 'pages/WorkflowModernization/WorkflowModernization.jsx';

  useEffect(() => {
    document.title = 'Workflow Modernization';
  }, []);

  const config = useContext(SiteConfigContext);

  if (!config) return null;

  return (
    <div className="container py-4">
      <GitHubLink filePath={gitHubLinkUrl} />

      <h1 className="mb-3">⚙️ Workflow Modernization</h1>
      <p className="lead">Streamline operations, reduce overhead, and empower your team.</p>

      <h3>Solutions</h3>
      <ul className='custom-list'>
        <li>Process mapping and automation design</li>
        <li>Use of AI agents in daily work</li>
        <li>Document and asset lifecycle simplification</li>
      </ul>

      <h3>Real Examples</h3>
      <ul className='custom-list'>
        <li>Automating customer onboarding</li>
        <li>Email and invoice sorting using Copilot/Power Automate</li>
        <li>Persona-based refresh cycles and centralized printing via IT Works</li>
      </ul>

      <div className="mt-4">
        <h3>Legacy Foundations</h3>
        <p>
          Before AI agents and cloud workflows, we built <strong>IT Works</strong>—a modular system management platform that automated refresh cycles, centralized printing, and software deployment across Windows environments.
          It laid the groundwork for persona-driven automation and lifecycle clarity that still informs our modernization strategies today.
        </p>
        <Link className="btn btn-outline-secondary" to="/it-works">
          Explore IT Works
        </Link>
      </div>

      <a
        className="btn btn-primary btn-lg mt-4"
        href={`mailto:${config.contactEmail}?subject=Workflow%20Modernization%20Inquiry`}
      > 
        Let’s simplify your operations
      </a>
    </div>
  );
};

export default WorkflowModernization;
