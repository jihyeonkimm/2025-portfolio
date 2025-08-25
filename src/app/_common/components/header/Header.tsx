'use client';

import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.Logo>Logo</S.Logo>
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
