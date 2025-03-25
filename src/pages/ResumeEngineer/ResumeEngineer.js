import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import '../../styles/global.css';

const ResumeEngineer = () => {
    return (
        <>
            <ResizableBackground />
            <Helmet>
                <title>Engineer Resume</title>
            </Helmet>
            <div className="container-resume">
                <h1>Engineer Resume</h1>
                <iframe
                    src={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Engineer - Full.pdf`}
                    className="pdf-viewer"
                    title="Engineer Resume"
                ></iframe>
                <p>
                    <a
                        href={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Engineer - Full.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download Engineer Resume
                    </a>
                </p>
            </div>
        </>
    );
};

export default ResumeEngineer;