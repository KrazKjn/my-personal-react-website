import { Helmet } from 'react-helmet';

const ResumeEngineer = () => {
    return (
        <>
            <Helmet>
                <title>Engineer Resume</title>
            </Helmet>
            <div className="container-resume">
                <h1>Engineer Resume</h1>
                <iframe
                    src="/assets/files/2025 - Resume - Engineer - Full.pdf"
                    className="pdf-viewer"
                    title="Engineer Resume"
                ></iframe>
                <p>
                    <a
                        href="/assets/files/2025 - Resume - Engineer - Full.pdf"
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