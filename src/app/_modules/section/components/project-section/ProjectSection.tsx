'use client';

import React from 'react';
import * as S from './styled';
import Inner from '@/app/_common/components/inner/Inner';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import projectListData from '@/data/projectListData.json';
import Image from 'next/image';
import useScroll from '@/app/hooks/useScroll';

interface DataProps {
  id: number;
  title: string;
  period: string;
  thumbnail: string;
}

const data: DataProps[] = projectListData.map((item) => ({
  ...item,
}));

const ProjectItem = ({ item }: { item: DataProps }) => {
  const { elementRef, isVisible } = useScroll({
    threshold: 0.2,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <S.ProjectItem
      key={item.id}
      ref={elementRef as React.RefObject<HTMLLIElement>}
      $isVisible={isVisible}
    >
      <S.ProjectItemButton type='button'>
        <S.ProjectItemImage>
          <Image src={item.thumbnail} alt='project thumbnail' fill sizes='100%' />
        </S.ProjectItemImage>
        <S.ProjectItemTitle>{item.title}</S.ProjectItemTitle>
        <S.ProjectItemTag>{item.period}</S.ProjectItemTag>
      </S.ProjectItemButton>
    </S.ProjectItem>
  );
};

const ProjectSection = () => {
  return (
    <S.StyledProjectSection>
      <Inner>
        <SectionTitle title='Projects' />
        {data.length > 0 && (
          <S.ProjectList>
            {data.map((item) => (
              <ProjectItem item={item} key={item.id} />
            ))}
          </S.ProjectList>
        )}
        <S.MoreButton type='button'>더보기</S.MoreButton>
      </Inner>
    </S.StyledProjectSection>
  );
};

export default ProjectSection;
