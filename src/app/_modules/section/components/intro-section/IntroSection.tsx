'use client';

import React from 'react';
import * as S from './styled';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Inner from '@/app/_common/components/inner/Inner';

import { IntroIcon01 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon02 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon03 } from '@/app/_common/assets/icons/components/index';
import introDataJson from '@/app/data/introData.json';
import useScroll from '@/app/hooks/useScroll';

interface DataProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const iconMap = {
  IntroIcon01: <IntroIcon01 />,
  IntroIcon02: <IntroIcon02 />,
  IntroIcon03: <IntroIcon03 />,
};

const data: DataProps[] = introDataJson.map((item) => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap],
}));

const IntroItem = ({ 
  item, 
  elementRef, 
  isVisible 
}: { 
  item: DataProps;
  elementRef: React.RefObject<HTMLLIElement>;
  isVisible: boolean;
}) => {
  return (
    <S.IntroItem
      key={item.id}
      ref={elementRef}
      $isVisible={isVisible}
    >
      <S.IntroItemIcon>{item.icon}</S.IntroItemIcon>
      <S.IntroItemTitle>{item.title}</S.IntroItemTitle>
      <S.IntroItemText>{item.description}</S.IntroItemText>
    </S.IntroItem>
  );
};

const IntroSection = () => {
  const { elementRef: textRef, isVisible: textVisible } = useScroll({
    threshold: 0.2,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const item1Scroll = useScroll({ threshold: 0.2, rootMargin: '-50px', triggerOnce: true });
  const item2Scroll = useScroll({ threshold: 0.2, rootMargin: '-50px', triggerOnce: true });
  const item3Scroll = useScroll({ threshold: 0.2, rootMargin: '-50px', triggerOnce: true });

  const scrollRefs = [item1Scroll, item2Scroll, item3Scroll];

  return (
    <S.StyledIntroSection id='about'>
      <Inner>
        <SectionTitle title='About' />
        <S.IntroText
          ref={textRef as React.RefObject<HTMLParagraphElement>}
          $isVisible={textVisible}
        >
          적극적으로 개발하고 협업 중심으로 사고합니다.
        </S.IntroText>
        <S.IntroList>
          {data.map((item, index) => (
            <IntroItem 
              item={item} 
              key={item.id}
              elementRef={scrollRefs[index]?.elementRef as React.RefObject<HTMLLIElement>}
              isVisible={scrollRefs[index]?.isVisible || false}
            />
          ))}
        </S.IntroList>
      </Inner>
    </S.StyledIntroSection>
  );
};

export default IntroSection;
