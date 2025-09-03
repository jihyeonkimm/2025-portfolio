'use client';

import React, { useEffect, useState } from 'react';

import Container from '@/app/_common/components/container/Container';
import MainSection from '@/app/_modules/section/components/main-section/MainSection';
import IntroSection from '@/app/_modules/section/components/intro-section/IntroSection';
import ProjectSection from '@/app/_modules/section/components/project-section/ProjectSection';
import ContactSection from '@/app/_modules/section/components/contact-section/ContactSection';

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handlePageLoading = () => {
      setIsLoading(true);
    };

    if (document.readyState === 'complete') {
      setIsLoading(true);
    } else {
      window.addEventListener('load', handlePageLoading);
    }

    return () => window.removeEventListener('load', handlePageLoading);
  }, []);

  if (!isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <MainSection />
      <IntroSection />
      <ProjectSection />
      <ContactSection />
    </Container>
  );
};

export default MainContainer;
