'use client';

import React from 'react';
import * as S from './styled';
import useScroll from '@/app/hooks/useScroll';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const { elementRef, isVisible } = useScroll({
    threshold: 0.2,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <S.StyledSectionTitle
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      $isVisible={isVisible}
    >
      {title}
    </S.StyledSectionTitle>
  );
};

export default SectionTitle;
