import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import '../../styles/global.css';

const ResumeManager = () => {
    return (
        <>
            <ResizableBackground />
            <GitHubLink filePath="pages/ResumeManager/ResumeManager.js" />
            <Helmet>
                <title>Manager Resume</title>
            </Helmet>
            <div className="container-resume">
                <h1>Manager Resume</h1>
                <iframe
                    src={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Manager - Full.pdf`}
                    className="pdf-viewer"
                    title="Manager Resume"
                ></iframe>
                <p>
                    <a
                        href={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Manager - Full.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download Manager Resume
                    </a>
                </p>
            </div>
        </>
    );
};

export default ResumeManager;