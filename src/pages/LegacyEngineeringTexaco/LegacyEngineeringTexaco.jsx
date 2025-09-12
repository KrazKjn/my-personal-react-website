import React, { useRef } from 'react';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

function LegacyEngineeringTexaco() {
  const gitHubLinkUrl = 'pages/LegacyEngineeringTexaco/LegacyEngineeringTexaco.jsx';
  const pdfModalSysEngTexacoPDF = useRef();

  return (
    <div className="container py-4">
      <GitHubLink fullURL={gitHubLinkUrl} />

      <h1 className="mb-3">Strategic Systems Engineering at Texaco</h1>

      <p>
        This archive showcases a series of engineering wins from my time at Texaco’s Los Angeles refinery—where I led initiatives that redefined SCADA integration, automated fragile infrastructure, and built secure desktop environments from the ground up.
      </p>

      <p>
        Each solution reflects a mindset of strategic reuse, operational resilience, and technical empathy. From restoring telemetry across decommissioned systems to building a live management console for domain oversight, these stories demonstrate the depth and clarity I bring to every challenge.
      </p>

      <PdfLink 
          filePath={`${process.env.PUBLIC_URL}/assets/files/2025 - Strategic Systems Engineering Texaco.pdf`}
          title="Strategic Systems Engineering Texaco (PDF)"
          linkText="📄 Strategic Systems Engineering Texaco (PDF)"
          pdfModalRef={pdfModalSysEngTexacoPDF} />            

      <PdfModal ref={pdfModalSysEngTexacoPDF} modalSize="max-width: 900px;" />

      <div className="download-link mt-2">
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/pulse/strategic-systems-engineering-texaco-legacy-resilience-mark-hogan-6rltc/?trackingId=o5M%2BFy2%2BRCehp1ErmJy9QQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Also available as a LinkedIn Article (View)
        </a>
      </div>
    </div>
  );
}

export default LegacyEngineeringTexaco;
