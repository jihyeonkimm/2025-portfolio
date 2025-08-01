'use client';

import Header from '../header/Header';
import * as S from './styled';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <S.StyledContainer>
      <Header />

      {children}
    </S.StyledContainer>
  );
};

export default Container;
