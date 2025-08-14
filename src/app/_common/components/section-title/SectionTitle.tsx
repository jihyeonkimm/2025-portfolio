import React from 'react';
import * as S from './styled';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <S.StyledSectionTitle>{title}</S.StyledSectionTitle>;
};

export default SectionTitle;
