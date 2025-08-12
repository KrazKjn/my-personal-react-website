import React, { useEffect } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import './ProblemSolvingPortfolio.css'; // Optional scoped styles

const ProblemSolvingPortfolio = () => {
  useEffect(() => {
    document.title = '🛠️ Problem Solving Portfolio';
  }, []);

  return (
    <div className="container">
      <GitHubLink filePath="pages/ProblemSolvingPortfolio/ProblemSolvingPortfolio.jsx" />

      <h1>Problem Solving Portfolio</h1>

      <iframe
        src="assets/files/2025 - Resume - Problem Solving Portfolio.pdf"
        className="pdf-viewer"
        title="Problem Solving Portfolio"
      />

      <p>
        <a
          href="assets/files/2025 - Resume - Problem Solving Portfolio.pdf"
          target="_blank"
          download
        >
          Download Problem Solving Portfolio
        </a>
      </p>
    </div>
  );
};

export default ProblemSolvingPortfolio;
