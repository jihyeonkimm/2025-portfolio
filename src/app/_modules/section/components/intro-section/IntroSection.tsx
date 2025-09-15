'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';

import { IntroIcon01 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon02 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon03 } from '@/app/_common/assets/icons/components/index';
import introDataJson from '@/app/data/introData.json';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';

interface DataProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
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

const IntroItem = ({ item, style }: { item: DataProps; style?: React.CSSProperties }) => {
  return (
    <S.IntroItem key={item.id} style={style}>
      <S.IntroItemIcon>{item.icon}</S.IntroItemIcon>
      <S.IntroItemTitle>{item.title}</S.IntroItemTitle>
      <S.IntroItemText>{item.description}</S.IntroItemText>
    </S.IntroItem>
  );
};

const IntroSection = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const calculateScroll = () => {
    if (!stickyRef.current || !containerRef.current) return 0;

    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // 시작점
    const start = containerTop;

    const animationDuration = viewportHeight * 3;

    if (scrollY < start) {
      return 0;
    } else if (scrollY > start + animationDuration) {
      return 1;
    } else {
      return (scrollY - start) / animationDuration;
    }
  };
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const progress = calculateScroll();

    // 현재 단계 계산 (0, 1, 2)
    const step = Math.min(Math.floor(progress * 2.5), 2);
    setCurrentStep(step);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 각 단계별 opacity 계산 (0 또는 1만 반환)
  const getOpacity = (index: number) => {
    const progress = calculateScroll();

    console.log('currentStep', currentStep, 'index', index, 'progress', progress);

    // 현재 단계와 정확히 일치할 때만 1, 나머지는 0
    return currentStep === index ? 1 : 0;
  };

  return (
    <S.StyledIntroSection id='about' ref={containerRef}>
      <S.StickyWrapper ref={stickyRef}>
        {/* <S.IntroText
          ref={textRef as React.RefObject<HTMLParagraphElement>}
          $isVisible={textVisible}
        >
          적극적으로 개발하고 협업 중심으로 사고합니다.
        </S.IntroText> */}
        <S.IntroList>
          <SectionTitle
            title={
              <>
                적극적으로 개발하고 <br />
                협업 중심으로 사고합니다.
              </>
            }
            align='center'
          />
          {data.map((item, index) => (
            <IntroItem
              item={item}
              key={item.id}
              style={{
                opacity: getOpacity(index),
                zIndex: currentStep === index ? 1 : 0,
                transform:
                  currentStep === index
                    ? 'translate(-50%, -50%) scale(1)'
                    : 'translate(-50%, -40%) scale(0.95)',
              }}
            />
          ))}
        </S.IntroList>
      </S.StickyWrapper>
    </S.StyledIntroSection>
  );
};

export default IntroSection;
