import { Helmet } from 'react-helmet';

const ResumeManager = () => {
    return (
        <>
            <Helmet>
                <title>Manager Resume</title>
            </Helmet>
            <div className="container-resume">
                <h1>Manager Resume</h1>
                <iframe
                    src="/assets/files/2025 - Resume - Manager - Full.pdf"
                    className="pdf-viewer"
                    title="Manager Resume"
                ></iframe>
                <p>
                    <a
                        href="/assets/files/2025 - Resume - Manager - Full.pdf"
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