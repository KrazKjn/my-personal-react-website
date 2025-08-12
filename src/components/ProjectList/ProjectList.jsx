import React from 'react';
import TextFormatter from '../../components/TextFormatter/TextFormatter';
import '../../styles/global.css';

const ProjectList = ({ projects }) => {
    if (!projects || projects.length === 0) {
      return <p>No projects to display.</p>;
    }
  
    return (
        <div className="projects-container">
            <h4>Try these Projects ...</h4>
            <ul className='custom-list'>
            {projects.map((project, index) => {
            return (
                    <li>
                    {project.link ? (                    
                        <a href={project.link} target="_blank" rel="noopener noreferrer" title={`Try ${project.name} ...`} >
                        {project.imageUrl ? (
                            <img
                            src={(String(project.imageUrl).startsWith('/') ? process.env.PUBLIC_URL : "") + project.imageUrl}
                            alt={project.imageAlt ?? project.name}
                            className={`rounded-4 image-url-left-small`}
                            />
                        ) : (
                            "View Project"
                        )}
                        </a>
                    ) : (
                        <p>No link provided</p>
                    )}
                    {project.description && (
                        <TextFormatter textBody={project.description} quote={false} />
                    )}
                    </li>
            );
            })}
            </ul>
        </div>
    );
  };
  
  export default ProjectList;