'use client';

import React, { useEffect, useState } from 'react';

import * as S from './styled';
import LottieAnimation from '@/app/_common/components/lottie-animation/LottieAnimation';
import mouse from '@public/assets/lottie/mouse.json';
import { useIsMobile } from '@/app/hooks/useIsMobile';

interface TextDataProps {
  id: number;
  text: string;
  color?: string;
}

const textData: TextDataProps[] = [
  { id: 1, text: 'PROACTIVE ', color: 'orange' },
  { id: 2, text: 'DEVELOPER,' },
  { id: 3, text: '\n' },
  { id: 4, text: 'COLLABORATIVE ' },
  { id: 5, text: 'MINDSET', color: 'orange' },
];

const mobileTextData: TextDataProps[] = [
  { id: 1, text: 'PROACTIVE', color: 'orange' },
  { id: 2, text: '\n' },
  { id: 3, text: 'DEVELOPER,' },
  { id: 4, text: '\n' },
  { id: 5, text: 'COLLABORATIVE' },
  { id: 6, text: '\n' },
  { id: 7, text: 'MINDSET', color: 'orange' },
];

const MainSection = () => {
  const isMobileView = useIsMobile();
  const [firstTagPosition, setFirstTagPosition] = useState<{ x: number; y: number }>({
    x: -30,
    y: 15,
  });
  const [secondTagPosition, setSecondTagPosition] = useState<{ x: number; y: number }>({
    x: 30,
    y: -15,
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const createTextArray = () => {
    const textArray: TextDataProps[] = [];
    let textIndex = 0;
    const selectedTextData = isMobileView ? mobileTextData : textData;

    selectedTextData.forEach(({ text, color }) => {
      text.split('').forEach((char) => {
        textArray.push({
          id: textIndex++,
          text: char === ' ' ? '\u00A0' : char,
          color,
        });
      });
    });

    return textArray;
  };

  const textArray = createTextArray();

  const playAnimation = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isMobileView) return;

    // firstTag 설정
    const firstBaseX = -30;
    const firstBaseY = 15;

    // secondTag 설정
    const secondBaseX = 30;
    const secondBaseY = -15;

    // 마우스의 영향 범위
    const influenceRangeX = 15; // ±15vw
    const influenceRangeY = 50; // ±10vh

    // 마우스 위치를 0~1 비율로 변환
    const mouseRatioX = event.clientX / window.innerWidth;
    const mouseRatioY = event.clientY / window.innerHeight;

    // 마우스 영향을 -1 ~ +1 범위로 변환 (중앙이 0)
    const mouseInfluenceX = (mouseRatioX - 0.5) * 2;
    const mouseInfluenceY = (mouseRatioY - 0.5) * 2;

    // firstTag 계산
    const firstX = firstBaseX + mouseInfluenceX * influenceRangeX * 0.5;
    const firstY = firstBaseY + mouseInfluenceY * influenceRangeY * 0.3;

    // secondTag 계산
    const secondX = secondBaseX - mouseInfluenceX * influenceRangeX * 0.5;
    const secondY = secondBaseY - mouseInfluenceY * influenceRangeY * 0.3;

    setFirstTagPosition({ x: firstX, y: firstY });
    setSecondTagPosition({ x: secondX, y: secondY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    playAnimation();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <S.StyledMainContainer>
      <S.BlurContainer>
        <S.Blob className='blob1' />
        <S.Blob className='blob2' />
        <S.Blob className='blob3' />
      </S.BlurContainer>

      <S.Tag
        style={{
          transform: isMobileView
            ? 'unset'
            : `translate3d(${firstTagPosition.x}vw, ${firstTagPosition.y}vh, 0px)`,
        }}
      >
        <S.Dot />
        Front-End Developer
      </S.Tag>

      <S.MainTitle>
        {textArray.map(({ id, text, color }) => {
          if (text === '\n') {
            return <br key={`br-${id}`} />;
          }
          return (
            <S.MainTitleText
              key={`${id}-${text}`}
              $isPlaying={isPlaying}
              $color={color}
              style={{ animationDelay: `${id * 0.05}s` }}
            >
              {text}
            </S.MainTitleText>
          );
        })}
      </S.MainTitle>

      <S.Tag
        style={{
          transform: isMobileView
            ? 'unset'
            : `translate3d(${secondTagPosition.x}vw, ${secondTagPosition.y}vh, 0px)`,
        }}
      >
        <S.Dot />
        Jihyeon ☺
      </S.Tag>

      <S.LottieContainer>
        <LottieAnimation animationData={mouse} width={50} height={70} />
      </S.LottieContainer>
    </S.StyledMainContainer>
  );
};

export default MainSection;
