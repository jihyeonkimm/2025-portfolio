'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ProjectDetail from '@/app/_modules/project/components/detail/Detail';
import Popup from '@/app/_common/components/popup/Popup';

interface ProjectModalPageProps {
  params: Promise<{
    projectName: string;
  }>;
}

const ProjectModalPage = ({ params }: ProjectModalPageProps) => {
  const router = useRouter();
  const { projectName } = React.use(params);

  const handleClose = () => {
    router.back();
  };

  return (
    <Popup onClose={handleClose}>
      <ProjectDetail projectName={projectName} />
    </Popup>
  );
};

export default ProjectModalPage;
