import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import { SiteConfigContext } from '../../context/SiteConfigContext';

const Contact = () => {
    const gitHubLinkUrl = 'pages/Contact/Contact.jsx';
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath={gitHubLinkUrl} />
            <Helmet>
                <title>Mark J. Hogan - Contact</title>
            </Helmet>
            <ul className='custom-list'>
                <li>LinkedIn:<a href={config.LinkedInProfile} target="_blank" rel="noopener noreferrer">{config.LinkedInProfile}</a></li>
                <li>Personal Website: <a href="https://krazkjn.github.io/my-personal-blazor-website/" target="_blank" rel="noopener noreferrer">Personal Website in Blazor</a></li>
                <li>Projects on LinkedIn: <a href={`${config.LinkedInProfile}/details/projects/`} target="_blank" rel="noopener noreferrer">My Projects</a></li>
                <li>Blog on LinkedIn: <a href={`${config.LinkedInProfile}/recent-activity/articles/`} target="_blank" rel="noopener noreferrer">My Blog Articles</a></li>
                <li>GitHub: <a href={config.GitHubProfile} target="_blank" rel="noopener noreferrer">{config.GitHubProfile}</a></li>
                <li>Email: <a href={`mailto:${config.ContactEmail}`} rel="noopener noreferrer">{config.ContactEmail}</a></li>
                {config.ContactPhone && (
                    <li>Phone: <a href={`tel:${config.ContactPhone}`} rel="noopener noreferrer">{config.ContactPhone}</a></li>
                )}
                {config.TwitterProfile && (
                    <li>Twitter: <a href={config.TwitterProfile} target="_blank" rel="noopener noreferrer">{config.TwitterProfile}</a></li>
                )}
                {config.FacebookProfile && (
                    <li>Facebook: <a href={config.FacebookProfile} target="_blank" rel="noopener noreferrer">{config.FacebookProfile}</a></li>
                )}
                {config.InstagramProfile && (
                    <li>Instagram: <a href={config.InstagramProfile} target="_blank" rel="noopener noreferrer">{config.InstagramProfile}</a></li>
                )}
            </ul>
        </div>
    );
};

export default Contact;