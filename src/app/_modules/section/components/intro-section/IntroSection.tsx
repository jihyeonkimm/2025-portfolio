'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';

import introDataJson from '@/app/data/introData.json';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Image from 'next/image';

interface DataProps {
  id: number;
  img: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const data: DataProps[] = introDataJson.map((item) => ({
  ...item,
}));

const IntroItem = ({ item, style }: { item: DataProps; style?: React.CSSProperties }) => {
  return (
    <S.IntroItem key={item.id} style={style}>
      <S.IntroItemIcon>
        <Image src={item.img} alt={`${item.title}을 나타내는 이미지`} fill sizes='100%' />
      </S.IntroItemIcon>
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
    // const progress = calculateScroll();

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
        <S.IntroWrapper>
          <SectionTitle
            title={
              <>
                <S.GradientText>적극적으로 개발</S.GradientText>하고 <br />
                협업 중심으로 사고합니다.
              </>
            }
            align='center'
          />
          <S.IntroList>
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
        </S.IntroWrapper>
      </S.StickyWrapper>
    </S.StyledIntroSection>
  );
};

export default IntroSection;
