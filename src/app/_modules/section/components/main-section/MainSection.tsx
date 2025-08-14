'use client';

import React, { useEffect, useState } from 'react';

import * as S from './styled';
import LottieAnimation from '@/app/_common/components/lottie-animation/LottieAnimation';
import mouse from '@public/assets/lottie/mouse.json';

const MainSection = () => {
  const [firstTagPosition, setFirstTagPosition] = useState({ x: -30, y: 15 });
  const [secondTagPosition, setSecondTagPosition] = useState({ x: 30, y: -15 });

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <S.StyledMainContainer>
      <S.MainTitle>
        <S.MainText>PROACTIVE</S.MainText> DEVELOPER, <br />
        COLLABORATIVE <S.MainText>MINDSET</S.MainText>
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
