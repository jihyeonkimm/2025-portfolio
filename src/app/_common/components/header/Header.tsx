'use client';

import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

type SectionId = 'home' | 'about' | 'projects' | 'contact';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

const MENU_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
    <S.StyledHeader>
      <S.Logo>
        <Link href={'/'}>
          <Image src='/assets/images/logo.png' alt='logo' fill sizes='100%' />
        </Link>
      </S.Logo>
      <S.MenuList>
        {MENU_ITEMS.map((item) => (
          <S.MenuItem 
            key={item.id}
            $isActive={activeSection === item.id}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </S.MenuItem>
        ))}
      </S.MenuList>
      <S.MobileMenuButton type='button'>
        <span></span>
        <span></span>
        <span></span>
      </S.MobileMenuButton>
    </S.StyledHeader>
  );
};

export default Header;
