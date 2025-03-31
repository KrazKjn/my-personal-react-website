import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

const MyContacts = () => {
    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath="pages/MyContacts/MyContacts.js" />
            <Helmet>
                <title>Mark J. Hogan - My Contact</title>
            </Helmet>
            <h2>My Contact Information</h2>
            <ul>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:Mark.Hogan.La@outlook.com">Mark.Hogan.La@outlook.com</a>
                </li>
                <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/markhoganinla" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/markhoganinla
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/KrazKjn" target="_blank" rel="noopener noreferrer">
                        github.com/KrazKjn
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MyContacts;