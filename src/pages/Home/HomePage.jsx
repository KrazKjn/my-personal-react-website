import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import CallToAction from '../../components/CallToAction/CallToAction';
import { SiteConfigContext } from '../../context/SiteConfigContext';
import '../../styles/global.css';

const HomePage = () => {
    const gitHubLinkUrl = 'pages/Home/HomePage.jsx';
    const config = useContext(SiteConfigContext);

    if (!config) return null;

    return (
        <div id="main-page">
            <Helmet>
                <title>Mark J. Hogan</title>
            </Helmet>
            
            <ResizableBackground />
            <GitHubLink filePath={gitHubLinkUrl} />

            <h1>Mark J. Hogan — Manager. Architect. Developer. Educator. Strategist.<br />
                <small className="text-info">Empowering small businesses through modern AI education, consulting, and workflow design.</small>
            </h1>

            <Link className="btn btn-primary btn-lg mt-3" to="/offerings">
                Explore Services
            </Link>

            <div className="container">
                <p>
                    I’m <strong>Mark J. Hogan</strong>, a Software Engineering Manager, Architect, and Developer with over two decades of leadership in backend systems, product modernization, and team mentorship. This site—built in <em>React</em>—is where I share ideas, projects, and my commitment to resilient, user-focused technology.
                </p>

                <h2>About Me</h2>
                <p>
                    As a Software Engineering Manager and Architect, I specialize in building scalable enterprise platforms, modernizing legacy systems, and leading teams to deliver reliable, maintainable solutions. With over 20 years in regulated industries, I’ve guided backend transformations, driven CI/CD adoption, and architected API ecosystems that balance performance with clarity.
                </p>

                <p>
                    My experience spans:
                    <ul className='custom-list'>
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

                <h2>Explore My Work</h2>
                <ul className='custom-list'>
                    <li>Personal Website: <a href="https://krazkjn.github.io/my-personal-blazor-website/" target="_blank" rel="noopener noreferrer">Personal Website in Blazor</a></li>
                    <li>Projects: <a href={`${config.LinkedInProfile}/details/projects/`} target="_blank" rel="noopener noreferrer">My Projects</a></li>
                    <li>Blog: <a href={`${config.LinkedInProfile}/recent-activity/articles/`} target="_blank" rel="noopener noreferrer">My Blog Articles</a></li>
                    <li>GitHub: <a href={`${config.GitHubProfile}`} target="_blank" rel="noopener noreferrer">{`${config.GitHubProfile}`}</a></li>
                </ul>
                <p>
                    My engineering mindset was forged through decades of solving real-world problems—digital, mechanical, and everything between.
                    <Link to="problem-solving-profile">See how I approach complex challenges »</Link>
                </p>
                <CallToAction />
                <div className="alert alert-success mt-4" role="alert">
                    <h4 className="alert-heading">🚀 AI Training & Services for Small Business</h4>
                    <p>Curious about AI but overwhelmed by jargon? <strong>Now offering hands-on AI education and consulting for small businesses!</strong></p>
                    <a className="btn btn-primary mt-2" href="ai-training">Learn More & Book for 2026</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;