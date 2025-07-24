import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';

const MyContacts = () => {
    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath="pages/MyContacts/MyContacts.js" />
            <Helmet>
                <title>Mark J. Hogan - My Contact</title>
            </Helmet>
            <CallToAction />
        </div>
    );
};

export default MyContacts;