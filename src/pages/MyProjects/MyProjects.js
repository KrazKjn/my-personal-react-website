import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/global.css';

const MyProjects = () => {
    const [projects, setProjects] = useState(null); // Holds the project items
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch('/assets/data/projects.json'); // Fetch the JSON file
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
                                {project.imageUrl && (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className={`rounded-3 image-url-${isOdd ? 'left' : 'right'}`}
                                    />
                                )}
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                            {project.description.startsWith('<li>') ? (
                                <ul>
                                    {project.description
                                        .split('</li>')
                                        .filter(item => item.trim() !== '') // Remove empty items
                                        .map((item, idx) => (
                                            <li key={idx}>{item.split('>')[1]}</li>
                                        ))}
                                </ul>
                            ) : project.description.startsWith('<p>') ? (
                                <div className="paragraph-rows">
                                    {project.description
                                        .split('</p>')
                                        .filter(item => item.trim() !== '')
                                        .map((item, idx) => (
                                            <p key={idx}>{item.split('>')[1]}</p>
                                        ))}
                                </div>
                            ) : (
                                <p>{project.description}</p>
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