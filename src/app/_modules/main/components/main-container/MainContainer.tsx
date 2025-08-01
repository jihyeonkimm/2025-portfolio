'use client';

import React, { useEffect, useState } from 'react';

import Container from '@/app/_common/components/container/Container';
import * as S from './styled';
import LottieAnimation from '@/app/_common/components/lottie-animation/LottieAnimation';
import mouse from '@public/assets/lottie/mouse.json';

const MainContainer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 30, y: -15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const baseX = 30;
      const baseY = -15;

      // 마우스의 영향 범위 (메인타이틀 영역 내에서만 움직이도록 제한)
      const influenceRangeX = 0; // ±15vw 범위
      const influenceRangeY = 50; // ±10vh 범위

      // 마우스 위치를 0~1 비율로 변환
      const mouseRatioX = e.clientX / window.innerWidth;
      const mouseRatioY = e.clientY / window.innerHeight;

      // 마우스 영향을 -1 ~ +1 범위로 변환 (중앙이 0)
      const mouseInfluenceX = (mouseRatioX - 0.5) * 2;
      const mouseInfluenceY = (mouseRatioY - 0.5) * 2;

      const x = baseX - mouseInfluenceX * influenceRangeX * 0.5;
      const y = baseY - mouseInfluenceY * influenceRangeY * 0.3;

      setMousePosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <S.StyledMainContainer>
        <S.MainTitle>
          <S.MainText>PROACTIVE</S.MainText> DEVELOPER, <br />
          COLLABORATIVE MINDSET
        </S.MainTitle>

        <S.Tag
          style={{
            transform: `translate3d(${mousePosition.x}vw, ${mousePosition.y}vh, 0px)`,
          }}
        >
          <S.Dot />
          Jihyeon ☺
        </S.Tag>

        <S.LottieContainer>
          <LottieAnimation animationData={mouse} width={50} height={70} />
        </S.LottieContainer>
      </S.StyledMainContainer>
    </Container>
  );
};

export default MainContainer;
