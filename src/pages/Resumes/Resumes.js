import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import '../../styles/global.css';

const Resumes = () => {
    return (
        <div className="container">
            <ResizableBackground />
            <Helmet>
                <title>Mark J. Hogan - My Resumes</title>
            </Helmet>
            <h1>My Resumes</h1>
            <p>Select a resume to view:</p>
            <ul>
                <li>
                    <Link className="nav-link" to="/resume-engineer">
                        <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span> Engineer Resume
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/resume-manager">
                        <span className="bi bi-journal-text-nav-menu" aria-hidden="true"></span> Manager Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Resumes;