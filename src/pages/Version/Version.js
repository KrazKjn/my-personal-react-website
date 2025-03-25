import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import DependenciesList from '../../components/DependenciesList/DependenciesList';

const Version = () => {
   
    return (
        <div className="container">
            <ResizableBackground />
            <Helmet>
                <title>Mark J. Hogan - Web Site Information</title>
            </Helmet>
            <h1>Web Site Information</h1>
            <DependenciesList />
            <a href="https://react.dev//" target="_blank" rel="noopener noreferrer">
                About React...
            </a>
        </div>
    );
};

export default Version;