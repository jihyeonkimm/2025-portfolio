'use client';

import { useRouter } from 'next/navigation';
import * as S from './styled';
import { IconBack } from '@/app/_common/assets/icons/components';

interface DetailPageContainerProps {
  children: React.ReactNode;
}

const DetailPageContainer = ({ children }: DetailPageContainerProps) => {
  const router = useRouter();

  return (
    <S.StyledPageContainer>
      <S.HomeButton type='button' onClick={() => router.back()}>
        <IconBack />
        메인으로 돌아가기
      </S.HomeButton>
      {children}
    </S.StyledPageContainer>
  );
};

export default DetailPageContainer;
