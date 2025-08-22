import React from 'react';
import { useProjects } from '../../hooks/useProjects';

const Detail = () => {
  const { projects } = useProjects();

  return (
    <div>
      {projects.length > 0 && (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <p>{project.title}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Detail;
