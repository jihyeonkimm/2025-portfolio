import React from 'react';
import ProjectDetail from '@/app/_modules/project/components/detail/Detail';
import DetailPageContainer from '@/app/_modules/project/components/detail-page-container/DetailPageContainer';

interface ProjectPageProps {
  params: Promise<{
    projectName: string;
  }>;
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { projectName } = React.use(params);
  return (
    <DetailPageContainer>
      <ProjectDetail projectName={projectName} />
    </DetailPageContainer>
  );
};

export default ProjectPage;
