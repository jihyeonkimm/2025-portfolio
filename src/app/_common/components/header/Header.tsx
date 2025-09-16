'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/app/hooks/useIsMobile';

type SectionId = 'home' | 'about' | 'projects' | 'contact';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  scrollStart: boolean;
}

const MENU_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeSection, onNavigate, scrollStart }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const isMobileView = useIsMobile();

  const handleMobileMenuClick = (id: SectionId) => {
    onNavigate(id);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <S.StyledHeader $scrollStart={scrollStart}>
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
        <S.MobileMenuButton
          type='button'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          $isMobileMenuOpen={isMobileMenuOpen}
        >
          <S.MenuLine />
          <S.MenuLine />
          <S.MenuLine />
        </S.MobileMenuButton>
      </S.StyledHeader>

      {isMobileView && (isMobileMenuOpen || isClosing) && (
        <S.MobileMenuContainer $isClosing={isClosing}>
          <S.MobileCloseButton type='button' onClick={() => handleMobileMenuClose()}>
            <S.MenuLine />
            <S.MenuLine />
          </S.MobileCloseButton>
          <S.MobileMenuList>
            {MENU_ITEMS.map((item) => (
              <S.MenuItem
                key={item.id}
                $isActive={activeSection === item.id}
                onClick={() => handleMobileMenuClick(item.id)}
              >
                {item.label}
              </S.MenuItem>
            ))}
          </S.MobileMenuList>
        </S.MobileMenuContainer>
      )}
    </>
  );
};

export default Header;
