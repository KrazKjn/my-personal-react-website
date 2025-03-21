import React from 'react';
import { Helmet } from 'react-helmet';

const Resumes = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Mark J. Hogan - My Resumes</title>
            </Helmet>
            <h1>My Resumes</h1>
            <p>Select a resume to view:</p>
            <ul>
                <li>
                    <a href="/resume-engineer">Engineer Resume</a>
                </li>
                <li>
                    <a href="/resume-manager">Manager Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default Resumes;