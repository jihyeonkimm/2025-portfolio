import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { SectionId } from '../header/Header';

interface SideBarProps {
  activeSection: SectionId;
}

const SideBar = ({ activeSection }: SideBarProps) => {
  return (
    <S.SideBarContainer $show={activeSection === 'about' || activeSection === 'projects'}>
      <S.SideBarLink href='mailto:jh418531@gmail.com'>
        mail
        <Image src='/assets/images/icon/icon-mail.svg' alt='mail icon' width='20' height='20' />
        <S.SideBarTooltip>Mail</S.SideBarTooltip>
      </S.SideBarLink>
      <S.SideBarLink href='/assets/file/jihyeonkim-cv.pdf' download target='_blank'>
        CV
        <Image src='/assets/images/icon/icon-cv.svg' alt='cv icon' width='20' height='20' />
        <S.SideBarTooltip>CV</S.SideBarTooltip>
      </S.SideBarLink>
      <S.SideBarLink href='/assets/file/jihyeonkim-portfolio.pdf' download target='_blank'>
        Portfolio
        <Image
          src='/assets/images/icon/icon-portfolio.svg'
          alt='portfolio icon'
          width='20'
          height='20'
        />
        <S.SideBarTooltip>Portfolio</S.SideBarTooltip>
      </S.SideBarLink>
      <S.SideBarLink href='https://jhkim-blog.com' target='_blank'>
        blog
        <Image src='/assets/images/icon/icon-blog.svg' alt='blog icon' width='20' height='20' />
        <S.SideBarTooltip>Blog</S.SideBarTooltip>
      </S.SideBarLink>
      <S.SideBarLink href='https://github.com/jihyeonkimm' target='_blank'>
        github
        <Image src='/assets/images/icon/icon-github.svg' alt='github logo' width='20' height='20' />
        <S.SideBarTooltip>GitHub</S.SideBarTooltip>
      </S.SideBarLink>
    </S.SideBarContainer>
  );
};

export default SideBar;
