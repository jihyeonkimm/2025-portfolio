'use client';

import React from 'react';

import Container from '@/app/_common/components/container/Container';
import MainSection from '@/app/_modules/section/components/main-section/MainSection';
import IntroSection from '@/app/_modules/section/components/intro-section/IntroSection';
import ProjectSection from '@/app/_modules/section/components/project-section/ProjectSection';

const MainContainer = () => {
  return (
    <Container>
      <MainSection />
      <IntroSection />
      <ProjectSection />
    </Container>
  );
};

export default MainContainer;
