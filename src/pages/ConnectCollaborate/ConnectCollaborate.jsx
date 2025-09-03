import React from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';
import './ConnectCollaborate.css'; // Optional for scoped styles

const ConnectCollaborate = () => {
    const gitHubLinkUrl = 'pages/ConnectCollaborate/ConnectCollaborate.jsx';

    return (
        <div className="container">
            <GitHubLink filePath={gitHubLinkUrl} />
            <CallToAction />
        </div>
    );
};

export default ConnectCollaborate;
