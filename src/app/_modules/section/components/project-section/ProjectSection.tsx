'use client';

import React from 'react';
import * as S from './styled';
import Inner from '@/app/_common/components/inner/Inner';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import Image from 'next/image';
import useScroll from '@/app/hooks/useScroll';
import projectListData from '@/app/data/projectListData.json';
import { useRouter } from 'next/navigation';

interface DataProps {
  id: number;
  title: string;
  projectName: string;
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
  const router = useRouter();

  return (
    <S.ProjectItem
      key={item.id}
      ref={elementRef as React.RefObject<HTMLLIElement>}
      $isVisible={isVisible}
    >
      <S.ProjectItemButton
        type='button'
        onClick={() => router.push(`/project/${item.projectName}`, { scroll: false })}
      >
        <S.ProjectItemImage $isVisible={isVisible}>
          <Image src={item.thumbnail} alt='project thumbnail' fill sizes='100%' />
        </S.ProjectItemImage>
        <S.ProjectItemTitle>{item.title}</S.ProjectItemTitle>
        <S.ProjectItemTag
          ref={elementRef as React.RefObject<HTMLSpanElement>}
          $isVisible={isVisible}
        >
          <S.ProjectTagText>{item.period}</S.ProjectTagText>
        </S.ProjectItemTag>
      </S.ProjectItemButton>
    </S.ProjectItem>
  );
};

const ProjectSection = () => {
  return (
    <S.StyledProjectSection id='projects'>
      <S.StickyContainer>
        <S.StickyWrapper>
          <SectionTitle title='Featured Works' align='center' />
        </S.StickyWrapper>
      </S.StickyContainer>
      <S.ContentWrapper>
        <Inner>
          <SectionTitle title='in Software Development' align='center' />
          {data.length > 0 && (
            <S.ProjectList>
              {data.map((item) => (
                <ProjectItem item={item} key={item.id} />
              ))}
            </S.ProjectList>
          )}
        </Inner>
      </S.ContentWrapper>
    </S.StyledProjectSection>
  );
};

export default ProjectSection;
