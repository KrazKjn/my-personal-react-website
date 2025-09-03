import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import PdfModal from '../../components/PdfModal/PdfModal';
import PdfLink from '../../components/PdfLink/PdfLink';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import '../../styles/global.css';

const Resumes = () => {
    const gitHubLinkUrl = 'pages/Resumes/Resumes.jsx';
    const pdfModalEngineerResume = useRef();
    const pdfModalArchitectResume = useRef();
    const pdfModalManagerResume = useRef();
    const pdfModalLegacySysEngTexaco = useRef();

    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath={gitHubLinkUrl} />
            <Helmet>
                <title>Mark J. Hogan - My Resumes</title>
            </Helmet>
            <h1>My Resumes</h1>
            <p>Select a resume to view:</p>
            <ul className='custom-list'>
                <li>
                    <PdfLink 
                        filePath="assets/files/2025 - Resume - Engineer - Full.pdf"
                        title="Engineer Resume"
                        linkText="📄 Engineer Resume (PDF)"
                        pdfModalRef={pdfModalEngineerResume} />
                </li>
                <li>
                    <PdfLink 
                        filePath="assets/files/2025 - Resume - Architect - Full.pdf"
                        title="Architect Resume"
                        linkText="📄 Architect Resume (PDF)"
                        pdfModalRef={pdfModalArchitectResume} />
                </li>
                <li>
                    <PdfLink 
                        filePath="assets/files/2025 - Resume - Manager - Full.pdf"
                        title="Manager Resume"
                        linkText="📄 Manager Resume (PDF)"
                        pdfModalRef={pdfModalManagerResume} />
                </li>
                <li>
                    <PdfLink 
                        filePath="assets/files/2025 - Resume - Legacy Technology.pdf"
                        title="Infrastructure Legacy Systems Engineering Addendum"
                        linkText="📄 Infrastructure Legacy Systems Engineering Addendum (PDF)"
                        pdfModalRef={pdfModalLegacySysEngTexaco} />            
                </li>
            </ul>
            <PdfModal ref={pdfModalEngineerResume} modalSize="max-width: 900px;" />
            <PdfModal ref={pdfModalArchitectResume} modalSize="max-width: 900px;" />
            <PdfModal ref={pdfModalManagerResume} modalSize="max-width: 900px;" />
            <PdfModal ref={pdfModalLegacySysEngTexaco} modalSize="max-width: 900px;" />
        </div>
    );
};

export default Resumes;