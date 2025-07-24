import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import '../../styles/global.css';

const ResumeArchitect = () => {
    return (
        <>
            <ResizableBackground />
            <GitHubLink filePath="pages/ResumeArchitect/ResumeArchitect.js" />
            <Helmet>
                <title>Architect Resume</title>
            </Helmet>
            <div className="container-resume">
                <h1>Architect Resume</h1>
                <iframe
                    src={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Architect - Full.pdf`}
                    className="pdf-viewer"
                    title="Architect Resume"
                ></iframe>
                <p>
                    <a
                        href={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Architect - Full.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download Architect Resume
                    </a>
                </p>
            </div>
        </>
    );
};

export default ResumeArchitect;