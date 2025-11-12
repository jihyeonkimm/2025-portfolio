'use client';

import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';
import * as S from './styled';
import useActiveSection from '@/app/hooks/useActiveSection';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { activeSection, scrollToSection, scrollStart } = useActiveSection();

  return (
    <S.StyledContainer>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrollStart={scrollStart}
      />

      {children}
      <SideBar activeSection={activeSection} />
    </S.StyledContainer>
  );
};

export default Container;
