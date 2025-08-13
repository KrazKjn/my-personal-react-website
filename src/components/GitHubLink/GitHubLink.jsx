import React, { useContext } from "react";
import "./GitHubLink.css"; // Import your CSS file for styling
import { SiteConfigContext } from '../../context/SiteConfigContext';

const GitHubLink = ({ filePath }) => {
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    const baseURL = `${config.GitHubProfile}${config.BasePath}/blob/main/src`;
    const fullURL = `${baseURL}/${filePath}`;

    return (
        <div className="git-hub-link">
            <a href={`${fullURL}`} target="_blank" rel="noopener noreferrer">
                View this page on GitHub
            </a>
        </div>
    );
};

export default GitHubLink;
