import React, { useEffect } from 'react';
import * as S from './styled';
import Inner from '@/app/_common/components/inner/Inner';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import { useProjects } from '@/hooks/useProjects';

const ProjectSection = () => {
  const { projects } = useProjects();

  useEffect(() => {
    console.log('Projects:', projects);
  }, []);

  return (
    <S.StyledProjectSection>
      <Inner>
        <SectionTitle title='Projects' />
        {projects.length > 0 && (
          <div>
            {projects.map((project) => (
              <>
                <p>{project.title}</p>
                <p>{project.description}</p>
              </>
            ))}
          </div>
        )}
      </Inner>
    </S.StyledProjectSection>
  );
};

export default ProjectSection;
