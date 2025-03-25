import React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';

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
                    <a href={`${process.env.PUBLIC_URL}/resume-engineer`}>Engineer Resume</a>
                </li>
                <li>
                    <a href={`${process.env.PUBLIC_URL}/resume-manager`}>Manager Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default Resumes;