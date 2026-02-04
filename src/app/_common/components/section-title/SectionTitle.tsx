'use client';

import React from 'react';
import * as S from './styled';
import useScroll from '@/app/hooks/useScroll';

interface SectionTitleProps {
  title: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

const SectionTitle = ({ title, align, color }: SectionTitleProps) => {
  const { elementRef, isVisible } = useScroll({
    threshold: 0.6,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <S.StyledSectionTitle
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      $isVisible={isVisible}
      $align={align}
      $color={color}
    >
      {title}
    </S.StyledSectionTitle>
  );
};

export default SectionTitle;
