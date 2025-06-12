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

            <h1>Welcome to Mark J. Hogan's Personal Website</h1>

            <p>
                I am <strong>Mark J. Hogan</strong>, a Software Engineering Professional with extensive experience in designing, developing, architecting, and managing solutions.
                Welcome to my personal website, built using <em>React</em>!
            </p>

            <h2>About Me</h2>
            <p>
                As an <strong>Independent Software Developer, Engineer, Architect, and Manager</strong>, I bring over 30 years of experience in software engineering, systems architecture, and IT management.
                My expertise lies in designing <strong>scalable, high-performance solutions</strong> that drive efficiency and innovation.
            </p>

            <p>
                My background spans <strong>full-stack development, automation, and distributed control systems</strong>, with a focus on optimizing workflows and eliminating human error through technology.
                I have led teams, spearheaded system transformations, and delivered <strong>zero-defect software releases</strong> while mentoring the next generation of engineers.
            </p>

            <p>
                Whether it's developing REST APIs, automating enterprise environments, or enhancing cybersecurity protocols, I thrive on solving complex technical challenges.
            </p>

            <p>
                As a consultant and independent software developer, I bring my expertise to businesses and startups seeking <strong>robust, scalable architecture, system automation, and software engineering excellence</strong>.
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