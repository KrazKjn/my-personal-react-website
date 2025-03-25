import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

const HomePage = () => {
    return (
        <div id="main-page">
            <ResizableBackground />
            <GitHubLink filePath="pages/HomePage/HomePage.js" />
            <Helmet>
                <title>Mark J. Hogan</title>
            </Helmet>
            <h1>Welcome to Mark J. Hogan's Personal Website</h1>
            <p className="right-column">
                I am Mark J. Hogan, a Software Engineering Professional. Experienced in designing, developing, architecting, and managing solutions. Welcome to my personal website created using React!
            </p>
        </div>
    );
};

export default HomePage;