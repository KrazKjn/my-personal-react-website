import React from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';

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
                I’m <strong>Mark J. Hogan</strong>, a Software Engineering Manager, Architect, and Developer with over two decades of leadership in backend systems, product modernization, and team mentorship. This site—built in <em>React</em>—is where I share ideas, projects, and my commitment to resilient, user-focused technology.
            </p>

            <h2>About Me</h2>
            <p>
                As a Software Engineering Manager and Architect, I specialize in building scalable enterprise platforms, modernizing legacy systems, and leading teams to deliver reliable, maintainable solutions. With over 20 years in regulated industries, I’ve guided backend transformations, driven CI/CD adoption, and architected API ecosystems that balance performance with clarity.
            </p>

            <p>
                My experience spans:
            <ul>
                <li>React + .NET Core modernization using Backend-for-Frontend (BFF) design</li>
                <li>CI/CD adoption, defect elimination, and velocity optimization</li>
                <li>REST API ecosystems for real-time healthcare asset tracking</li>
                <li>Disaster recovery logic and planning</li>
                <li>Automation-first engineering philosophy using PowerShell, GitHub Actions, and Copilot-assisted reviews</li>
            </ul>
            </p>

            <p>
                Whether mentoring engineers or reimagining legacy architecture, I bring a systems-thinking mindset that combines technical rigor with user empathy. I believe great software should disappear into the background—quietly solving problems and empowering the people who rely on it.
            </p>

            <p>
                The passion runs deeper than code—I invest in engineers, coach clarity, and create systems that empower people and outlast trends.
            </p>

            <h3>Explore My Work:</h3>
            <ul>
                <li>Personal Website: <a href="https://krazkjn.github.io/my-personal-blazor-website/" target="_blank" rel="noopener noreferrer">Personal Website in Blazor</a></li>
                <li>Projects: <a href="https://www.linkedin.com/in/markhoganinla/details/projects/" target="_blank" rel="noopener noreferrer">My Projects</a></li>
                <li>Blog: <a href="https://www.linkedin.com/in/markhoganinla/recent-activity/articles/" target="_blank" rel="noopener noreferrer">My Blog Articles</a></li>
                <li>GitHub: <a href="https://github.com/KrazKjn/" target="_blank" rel="noopener noreferrer">github.com/KrazKjn</a></li>
            </ul>
            <CallToAction />
        </div>
    );
};

export default HomePage;