import React from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';
import './ConnectCollaborate.css'; // Optional for scoped styles

const ConnectCollaborate = () => {
    return (
        <div className="container">
            <GitHubLink filePath="pages/ConnectCollaborate/ConnectCollaborate.jsx" />
            <CallToAction />
        </div>
    );
};

export default ConnectCollaborate;
