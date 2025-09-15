'use client';

import React from 'react';
import * as S from './styled';
import useScroll from '@/app/hooks/useScroll';

interface SectionTitleProps {
  title: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ title, align }: SectionTitleProps) => {
  const { elementRef, isVisible } = useScroll({
    threshold: 0.2,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <S.StyledSectionTitle
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      $isVisible={isVisible}
      $align={align}
    >
      {title}
    </S.StyledSectionTitle>
  );
};

export default SectionTitle;
