'use client';

import Header from '../header/Header';
import * as S from './styled';
import useActiveSection from '@/app/hooks/useActiveSection';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <S.StyledContainer>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {children}
    </S.StyledContainer>
  );
};

export default Container;
