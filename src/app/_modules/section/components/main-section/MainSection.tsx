'use client';

import React, { useEffect, useState } from 'react';

import * as S from './styled';
import LottieAnimation from '@/app/_common/components/lottie-animation/LottieAnimation';
import mouse from '@public/assets/lottie/mouse.json';

interface TextDataProps {
  id: number;
  text: string;
  color?: string;
}

const MainSection = () => {
  const [firstTagPosition, setFirstTagPosition] = useState<{ x: number; y: number }>({
    x: -30,
    y: 15,
  });
  const [secondTagPosition, setSecondTagPosition] = useState<{ x: number; y: number }>({
    x: 30,
    y: -15,
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const textData: TextDataProps[] = [
    { id: 1, text: 'PROACTIVE ', color: 'orange' },
    { id: 2, text: 'DEVELOPER, \n' },
    { id: 3, text: 'COLLABORATIVE ' },
    { id: 4, text: 'MINDSET', color: 'orange' },
  ];

  const createTextArray = () => {
    const textArray: TextDataProps[] = [];
    let textIndex = 0;

    textData.forEach(({ text, color }) => {
      text.split('').forEach((char) => {
        textArray.push({
          id: textIndex++,
          text: char === ' ' ? '\u00A0' : char === '\n' ? '\n' : char,
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      const mouseRatioX = e.clientX / window.innerWidth;
      const mouseRatioY = e.clientY / window.innerHeight;

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

    document.addEventListener('mousemove', handleMouseMove);

    playAnimation();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <S.StyledMainContainer>
      <S.MainTitle>
        {textArray.map(({ id, text, color }) => (
          <S.MainTitleText
            key={`${id}-${text}`}
            $isPlaying={isPlaying}
            $color={color}
            style={{ animationDelay: `${id * 0.05}s` }}
          >
            {text}
          </S.MainTitleText>
        ))}
      </S.MainTitle>

      <S.Tag
        style={{
          transform: `translate3d(${firstTagPosition.x}vw, ${firstTagPosition.y}vh, 0px)`,
        }}
      >
        <S.Dot />
        Front-End Developer
      </S.Tag>

      <S.Tag
        style={{
          transform: `translate3d(${secondTagPosition.x}vw, ${secondTagPosition.y}vh, 0px)`,
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
