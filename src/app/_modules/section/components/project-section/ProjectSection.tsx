import React from 'react';
import * as S from './styled';
import Inner from '@/app/_common/components/inner/Inner';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';
import projectListData from '@/data/projectListData.json';
import Image from 'next/image';

interface DataProps {
  id: number;
  title: string;
  period: string;
  thumbnail: string;
}

const data: DataProps[] = projectListData.map((item) => ({
  ...item,
}));

const ProjectSection = () => {
  return (
    <S.StyledProjectSection>
      <Inner>
        <SectionTitle title='Projects' />
        {data.length > 0 && (
          <S.ProjectList>
            {data.map((item) => (
              <S.ProjectItem key={item.id}>
                <S.ProjectItemButton type='button'>
                  <S.ProjectItemImage>
                    <Image src={item.thumbnail} alt='project thumbnail' fill />
                  </S.ProjectItemImage>
                  <S.ProjectItemTitle>{item.title}</S.ProjectItemTitle>
                  <S.ProjectItemTag>{item.period}</S.ProjectItemTag>
                </S.ProjectItemButton>
              </S.ProjectItem>
            ))}
          </S.ProjectList>
        )}
      </Inner>
    </S.StyledProjectSection>
  );
};

export default ProjectSection;
