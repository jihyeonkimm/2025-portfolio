'use client';

import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.Logo>
        <Link href={'/'}>
          <Image src='/assets/images/logo.png' alt='logo' fill sizes='100%' />
        </Link>
      </S.Logo>
      <S.MenuList>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>About</S.MenuItem>
        <S.MenuItem>Projects</S.MenuItem>
        <S.MenuItem>Contact</S.MenuItem>
      </S.MenuList>
    </S.StyledHeader>
  );
};

export default Header;
