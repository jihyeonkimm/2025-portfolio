'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';

import introDataJson from '@/app/data/introData.json';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Image from 'next/image';
import { useIsMobile } from '@/app/hooks/useIsMobile';

interface DataProps {
  id: number;
  img: string;
  title: string;
  description: string;
  mo_description: string;
  style?: React.CSSProperties;
}

const data: DataProps[] = introDataJson.map((item) => ({
  ...item,
}));

const IntroItem = ({
  item,
  style,
  isMobileView,
}: {
  item: DataProps;
  style?: React.CSSProperties;
  isMobileView: boolean;
}) => {
  return (
    <S.IntroItem key={item.id} style={style}>
      <S.IntroItemIcon>
        <Image src={item.img} alt={`${item.title}을 나타내는 이미지`} fill sizes='100%' />
      </S.IntroItemIcon>
      <S.IntroTextWrapper>
        <S.IntroItemTitle>{item.title}</S.IntroItemTitle>
        <S.IntroItemText>{isMobileView ? item.mo_description : item.description}</S.IntroItemText>
      </S.IntroTextWrapper>
    </S.IntroItem>
  );
};

const IntroSection = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [bgOpacity, setBgOpacity] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isMobileView = useIsMobile();

  const getScrollValues = () => {
    if (!containerRef.current) return null;

    return {
      containerTop: containerRef.current.offsetTop,
      viewportHeight: window.innerHeight,
      scrollY: window.scrollY,
    };
  };

  // FixedSection 배경색을 위한 스크롤 계산 (viewportHeight만큼)
  const calculateBgOpacity = () => {
    const values = getScrollValues();
    if (!values) return 0;

    const { containerTop, viewportHeight, scrollY } = values;
    const start = containerTop - viewportHeight;
    const duration = viewportHeight;

    if (scrollY < start) {
      return 0;
    } else if (scrollY < start + duration) {
      return (scrollY - start) / duration;
    } else if (scrollY < start + duration * 2) {
      return 1;
    } else {
      return 0;
    }
  };

  // IntroItem 콘텐츠를 위한 스크롤 계산 (viewportHeight * 3)
  const calculateScroll = () => {
    const values = getScrollValues();
    if (!values || !stickyRef.current) return 0;

    const { containerTop, viewportHeight, scrollY } = values;
    const animationDuration = viewportHeight * 3;

    if (scrollY < containerTop) {
      return 0;
    } else if (scrollY > containerTop + animationDuration) {
      return 1;
    } else {
      return (scrollY - containerTop) / animationDuration;
    }
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const progress = calculateScroll();

    // 현재 단계 계산 (0, 1, 2)
    const step = Math.min(Math.floor(progress * 2.5), 2);
    setCurrentStep(step);

    // 배경색 투명도 계산 (viewportHeight만큼만)
    const opacity = calculateBgOpacity();
    setBgOpacity(opacity);
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
    <>
      <S.FixedSection $bgOpacity={bgOpacity}></S.FixedSection>

      <S.TitleSection ref={containerRef}>
        <SectionTitle
          title={
            <>
              적극적으로 개발하고 <br />
              협업 중심으로 사고합니다.
            </>
          }
          align='center'
        />
      </S.TitleSection>

      <S.StyledIntroSection id='about' $bgOpacity={bgOpacity}>
        <S.StickyWrapper ref={stickyRef}>
          <S.IntroWrapper>
            <S.IntroList>
              {data.map((item, index) => (
                <IntroItem
                  item={item}
                  key={item.id}
                  isMobileView={isMobileView}
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
    </>
  );
};

export default IntroSection;
