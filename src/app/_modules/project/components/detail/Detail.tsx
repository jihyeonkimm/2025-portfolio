'use client';

import React from 'react';
import { useProjects } from '../../hooks/useProjects';

interface ProjectDetailProps {
  projectName: string;
}

const ProjectDetail = ({ projectName }: ProjectDetailProps) => {
  const { projects } = useProjects();

  console.log(projects);

  return (
    <div>
      {projects.length > 0 && (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <p>{projectName}</p>
              <p>{project.title}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
