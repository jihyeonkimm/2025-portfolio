import React from 'react';
import * as S from './styled';

interface InnerProps {
  children: React.ReactNode;
}

const Inner = ({ children }: InnerProps) => {
  return <S.StyledInner>{children}</S.StyledInner>;
};

export default Inner;
