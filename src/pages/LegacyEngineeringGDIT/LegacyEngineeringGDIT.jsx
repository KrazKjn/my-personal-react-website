import React, { useRef } from 'react';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

function LegacyEngineeringGDIT() {
  const gitHubLinkUrl = 'pages/LegacyEngineeringGDIT/LegacyEngineeringGDIT.jsx';
  const pdfModalSysEngPDF = useRef();

  return (
    <div className="container py-4">
      <GitHubLink fullURL={gitHubLinkUrl} />

      <h1 className="mb-3">Strategic Release Engineering at General Dynamics IT</h1>

      <p>
        This archive highlights a series of internal tooling and automation breakthroughs from my time at General Dynamics IT—where I architected systems that streamlined enterprise releases, normalized time tracking, and automated geospatial deployments.
      </p>

      <p>
        Each solution reflects a mindset of modular design, procedural clarity, and human-centered engineering. From dependency-aware ticket orchestration to transforming raw TFS data into actionable insights, these stories showcase the precision and empathy I bring to infrastructure strategy.
    </p>

      <PdfLink 
          filePath={`${process.env.PUBLIC_URL}/assets/files/2025 - Strategic Release Engineering GDIT.pdf`}
          title="Strategic Release Engineering at GDIT"
          linkText="📄 Strategic Release Engineering at GDIT (PDF)"
          pdfModalRef={pdfModalSysEngPDF} />            

      <PdfModal ref={pdfModalSysEngPDF} modalSize="max-width: 900px;" />

      <div className="download-link mt-2">
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/pulse/strategic-release-engineering-general-dynamics-legacy-mark-hogan-ekp6c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Also available as a LinkedIn Article (View)
        </a>
      </div>
    </div>
  );
}

export default LegacyEngineeringGDIT;
