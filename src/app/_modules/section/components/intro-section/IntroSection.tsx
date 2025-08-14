import React from 'react';
import * as S from './styled';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Inner from '@/app/_common/components/inner/Inner';

import { IntroIcon01 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon02 } from '@/app/_common/assets/icons/components/index';
import { IntroIcon03 } from '@/app/_common/assets/icons/components/index';

interface DataProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const data: DataProps[] = [
  {
    id: 1,
    title: '첫번째 타이틀',
    description: '첫번째 설명',
    icon: <IntroIcon01 />,
  },
  {
    id: 2,
    title: '두번째 타이틀',
    description: '두번째 설명',
    icon: <IntroIcon02 />,
  },
  {
    id: 3,
    title: '세번째 타이틀',
    description: '세번째 설명',
    icon: <IntroIcon03 />,
  },
];

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
