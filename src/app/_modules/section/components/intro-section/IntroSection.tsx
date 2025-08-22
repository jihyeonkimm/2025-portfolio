import React from 'react';
import * as S from './styled';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Inner from '@/app/_common/components/inner/Inner';

import { IntroIcon01 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon02 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon03 } from '@/app/_common/assets/icons/components/index';
import introDataJson from '@/data/introData.json';

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

const data: DataProps[] = introDataJson.map(item => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap],
}));

const IntroSection = () => {
  return (
    <S.StyledIntroSection>
      <Inner>
        <SectionTitle title='About' />
        <S.IntroText>적극적으로 개발하고 협업 중심으로 사고합니다.</S.IntroText>
        <S.IntroList>
          {data.map((item) => (
            <S.IntroItem key={item.id}>
              <S.IntroItemIcon>{item.icon}</S.IntroItemIcon>
              <S.IntroItemTitle>{item.title}</S.IntroItemTitle>
              <S.IntroItemText>{item.description}</S.IntroItemText>
            </S.IntroItem>
          ))}
        </S.IntroList>
      </Inner>
    </S.StyledIntroSection>
  );
};

export default IntroSection;
