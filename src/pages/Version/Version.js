import React from 'react';
import DependenciesList from '../../components/DependenciesList/DependenciesList';

const Version = () => {
   
    return (
        <div className="container">
            <h1>Web Site Information</h1>
            <DependenciesList />
            <a href="https://react.dev//" target="_blank" rel="noopener noreferrer">
                About React...
            </a>
        </div>
    );
};

export default Version;