import React from 'react';
import TextFormatter from '../../components/TextFormatter/TextFormatter';
import '../../styles/global.css';

const ProjectList = ({ projects }) => {
    if (!projects || projects.length === 0) {
      return <p>No projects to display.</p>;
    }
  
    return (
      <div className="projects-container1">
        {projects.map((project, index) => {
          return (
            <div key={index} className={`project-item1 image-container-left1'}`}>
                {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
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
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ProjectList;