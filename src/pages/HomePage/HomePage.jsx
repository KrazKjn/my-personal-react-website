import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';

const HomePage = () => {
    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath="pages/HomePage/HomePage.js" />
            <Helmet>
                <title>Mark J. Hogan</title>
            </Helmet>

            <h1>Mark J. Hogan</h1>
            <h2>Independent Software Developer, Engineer & Architect, Manager</h2>

            <p>
                With over 30 years of experience in software engineering, systems architecture, and IT management, I specialize in designing scalable, high-performance solutions that drive efficiency and innovation.
            </p>
            <p>
                My background spans full-stack development, automation, and distributed control systems—with a strong focus on optimizing workflows and eliminating human error through technology.
            </p>
            <p>
                I’ve led teams, spearheaded system transformations, and delivered zero-defect software releases—all while mentoring the next generation of engineers. Whether it's developing REST APIs, automating enterprise environments, or enhancing cybersecurity protocols, I thrive on solving complex technical challenges.
            </p>
            <p>
                As an independent software developer and consultant, I bring my expertise to businesses and startups seeking robust, scalable architecture, system automation, and software engineering excellence.
            </p>
            <p>
                I actively contribute to open-source projects, share insights on my blog, and engage with the developer community to push boundaries in software innovation.
            </p>

            <h3>Explore My Work:</h3>
            <ul>
                <li>Personal Website: <a href="https://krazkjn.github.io/my-personal-react-website/" target="_blank" rel="noopener noreferrer">Personal Website in Blazor</a></li>
                <li>Projects: <a href="https://www.linkedin.com/in/markhoganinla/details/projects/" target="_blank" rel="noopener noreferrer">My Projects</a></li>
                <li>Blog: <a href="https://www.linkedin.com/in/markhoganinla/recent-activity/articles/" target="_blank" rel="noopener noreferrer">My Blog Articles</a></li>
                <li>GitHub: <a href="https://github.com/KrazKjn/" target="_blank" rel="noopener noreferrer">github.com/KrazKjn</a></li>
            </ul>
        </div>
    );
};

export default HomePage;