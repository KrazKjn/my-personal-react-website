import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';
import './LegacyProblemSolvingAddenda.css'; // Optional scoped styles

const LegacyProblemSolvingAddenda = () => {
  const gitHubLinkUrl = 'pages/LegacyProblemSolvingAddenda/LegacyProblemSolvingAddenda.jsx';
  const pdfModalLegacySysEngTexaco = useRef();
  const pdfModalProblemSolvingProfile = useRef();

  useEffect(() => {
    document.title = 'Legacy & Problem Solving Addenda';
  }, []);

  return (
    <div className="container py-4">
      <GitHubLink filePath={gitHubLinkUrl} />

      <h1 className="mb-3">Legacy & Problem Solving Addenda</h1>
      <p>
        Download or view supplemental documents related to legacy systems engineering and problem solving profiles.
      </p>

      <ul className='custom-list'>
        <li>
            <PdfLink 
                filePath="assets/files/2025 - Resume - Legacy Technology.pdf"
                title="Infrastructure Legacy Systems Engineering Addendum"
                linkText="📄 Infrastructure Legacy Systems Engineering Addendum (PDF)"
                pdfModalRef={pdfModalLegacySysEngTexaco} />            
        </li>
        <li>
            <PdfLink 
                filePath="assets/files/2025 - Resume - Problem Solving Portfolio.pdf"
                title="Problem Solving Profile"
                linkText="📄 Problem Solving Profile (PDF)"
                pdfModalRef={pdfModalProblemSolvingProfile} />            
        </li>       
      </ul>
    <PdfModal ref={pdfModalLegacySysEngTexaco} modalSize="max-width: 900px;" />
    <PdfModal ref={pdfModalProblemSolvingProfile} modalSize="max-width: 900px;" />
    </div>
  );
};

export default LegacyProblemSolvingAddenda;
