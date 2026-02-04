'use client';

import React from 'react';
import * as S from './styled';

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.Spinner />
    </S.LoadingContainer>
  );
};

export default Loading;
