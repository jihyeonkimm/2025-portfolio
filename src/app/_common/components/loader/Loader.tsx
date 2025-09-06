'use client';

import Image from 'next/image';
import * as S from './styled';

const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.Logo>
        <Image src='/assets/images/logo.png' alt='logo' fill sizes='100%' />
      </S.Logo>
      <S.LoaderText>Loading...</S.LoaderText>
    </S.LoaderContainer>
  );
};

export default Loader;
