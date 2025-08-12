import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import '../../styles/global.css';

const InfrastructureLegacySystemsEngineeringAddendum = () => {
    return (
        <>
            <ResizableBackground />
            <GitHubLink filePath="pages/InfrastructureLegacySystemsEngineeringAddendum/InfrastructureLegacySystemsEngineeringAddendum.jsx" />
            <Helmet>
                <title>Infrastructure Legacy Systems Engineering Addendum</title>
            </Helmet>
            <div className="container-resume">
                <h1>Infrastructure Legacy Systems Engineering Addendum</h1>
                <iframe
                    src={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Legacy Technology.pdf`}
                    className="pdf-viewer"
                    title="Legacy Systems Engineering Addendum"
                />
                <p>
                    <a
                        href={`${process.env.PUBLIC_URL}/assets/files/2025 - Resume - Legacy Technology.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download Infrastructure Legacy Systems Engineering Addendum
                    </a>
                </p>
            </div>
        </>
    );
};

export default InfrastructureLegacySystemsEngineeringAddendum;
