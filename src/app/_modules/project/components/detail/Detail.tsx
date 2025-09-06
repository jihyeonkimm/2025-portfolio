'use client';

import React from 'react';
import { useProjects } from '../../hooks/useProjects';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../loading/Loading';

interface ProjectDetailProps {
  projectName: string;
}

const ProjectDetail = ({ projectName }: ProjectDetailProps) => {
  const { projects } = useProjects();

  const currentProject = projects.find((project) => project.id === projectName);

  if (!currentProject) {
    return <Loading />;
  }

  return (
    <S.ProjectDetailContainer>
      {currentProject ? (
        <S.ProjectDetailInner>
          <S.ProjectTitleContainer>
            <S.ProjectLogo>
              <Image
                src={`/assets/images/project-logo/${currentProject.id}.svg`}
                alt='프로젝트 로고'
                fill
                sizes='100%'
              />
            </S.ProjectLogo>
            <S.ProjectDetailTitle>{currentProject.title}</S.ProjectDetailTitle>
            <S.ProjectTitleList>
              <S.ProjectTitleItem>
                <S.DetailTitle>프로젝트 이름</S.DetailTitle>
                <S.DetailText>{currentProject.projectName}</S.DetailText>
              </S.ProjectTitleItem>
              <S.ProjectTitleItem>
                <S.DetailTitle>프로젝트 설명</S.DetailTitle>
                <S.DetailText>{currentProject.description}</S.DetailText>
              </S.ProjectTitleItem>
              <S.ProjectTitleItem>
                <S.DetailTitle>기간</S.DetailTitle>
                <S.DetailText>{currentProject.duration}</S.DetailText>
              </S.ProjectTitleItem>
              <S.ProjectTitleItem>
                <S.DetailTitle>참여 인원</S.DetailTitle>
                <S.DetailText>{currentProject.participants}</S.DetailText>
              </S.ProjectTitleItem>
              <S.ProjectTitleItem>
                <S.DetailTitle>기술 스택</S.DetailTitle>
                <S.SkillContainer>
                  {currentProject.skills.map((skill, index) => (
                    <S.SkillImageContainer key={`${index}-${skill}`}>
                      <Image
                        src={`/assets/images/skills-logo/${
                          skill === 'Next.js' ? 'next' : skill === 'React Native' ? 'react' : skill
                        }.png`}
                        alt='기술 스택 로고'
                        fill
                        sizes='100%'
                      />
                      <S.SkillTooltip>{skill}</S.SkillTooltip>
                    </S.SkillImageContainer>
                  ))}
                </S.SkillContainer>
              </S.ProjectTitleItem>
              <S.ProjectTitleItem>
                <S.DetailTitle>관련 링크</S.DetailTitle>
                <S.DetailText>
                  <Link href={currentProject.link || ''} target='_blank'>
                    {currentProject.link}
                  </Link>
                </S.DetailText>
              </S.ProjectTitleItem>
            </S.ProjectTitleList>
          </S.ProjectTitleContainer>
          <S.DetailListContainer>
            <S.DetailListTitle>상세 내용</S.DetailListTitle>
            <S.DetailList>
              {currentProject.details?.map((detail, index) => (
                <S.DetailItem key={`${index}-${detail.title}`}>
                  <S.DetailItemTitle>{`${index + 1}. ${detail.title}`}</S.DetailItemTitle>
                  {detail.description &&
                    detail.description.map((text, index) => (
                      <S.DetailItemText key={`${index}-${text}`}>{text}</S.DetailItemText>
                    ))}
                </S.DetailItem>
              ))}
            </S.DetailList>
          </S.DetailListContainer>
        </S.ProjectDetailInner>
      ) : (
        <div>프로젝트를 찾을 수 없습니다.</div>
      )}
    </S.ProjectDetailContainer>
  );
};

export default ProjectDetail;
