import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ResizableBackground from '../../components/ResizableBackground/ResizableBackground';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import TextFormatter from '../../components/TextFormatter/TextFormatter';
import ProjectList from '../../components/ProjectList/ProjectList';
import '../../styles/global.css';

const MyProjects = () => {
    const [projects, setProjects] = useState(null); // Holds the project items
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/assets/data/projects.json`); // Fetch the JSON file
                const data = await response.json();
                setProjects(data); // Set the project data
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects.');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    // Display loading or error state
    if (error) return <p>Error: {error}</p>;
    if (projects === null) return <p>Loading projects...</p>;

    return (
        <div className="container">
            <ResizableBackground />
            <GitHubLink filePath="pages/MyProjects/MyProjects.js" />
            <Helmet>
                <title>Mark J. Hogan - My Projects</title>
            </Helmet>
            <h2>My Projects</h2>
            {projects.map((project, index) => {
                const isOdd = index % 2 !== 0; // Determine odd/even rows for styling
                return (
                    <div key={project.id}>
                        <h3>{project.name}</h3>
                        <div className={`recommendation${isOdd ? ' reverse' : ''}`}>
                            <div className={`image-container-${isOdd ? 'left' : 'right'}`}>
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" title={`View ${project.name} Repository ...`}>
                                    {project.imageUrl ? (
                                        <img
                                        src={(String(project.imageUrl).startsWith('/') ? process.env.PUBLIC_URL : "") + project.imageUrl}
                                        alt={project.imageAlt ?? project.name}
                                        className={`rounded-3 image-url-${isOdd ? 'left' : 'right'}`}
                                        />
                                    ) : (
                                        //"View Project(s) Repository"
                                        project.imageAlt ?? project.name
                                    )}
                                    </a>
                                ) : (
                                    <p>No link provided</p>
                                )}
                            </div>
                            {project.description && (
                                <TextFormatter textBody={project.description} quote={false} />
                            )}
                            {project.projects && (
                                <ProjectList projects={project.projects} />
                            )}
                        </div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default MyProjects;