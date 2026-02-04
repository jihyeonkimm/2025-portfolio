'use client';

import * as S from './styled';

const Skeleton = () => {
  return (
    <S.StyledLoadingContainer>
      {/* 커버 이미지 영역 */}
      <S.LoadingCover>
        <S.LoadingLogo />
        <S.LoadingTitle />
      </S.LoadingCover>

      {/* 프로젝트 정보 리스트 */}
      <S.LoadingTitleList>
        {/* 프로젝트 이름 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>

        {/* 프로젝트 설명 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>

        {/* 기간 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>

        {/* 참여 인원 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>

        {/* 기술 스택 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.SkillItemsContainer>
            <S.SkillItem />
            <S.SkillItem />
            <S.SkillItem />
            <S.SkillItem />
            <S.SkillItem />
            <S.SkillItem />
          </S.SkillItemsContainer>
        </S.LoadingTitleItem>

        {/* 관련 링크 */}
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>
      </S.LoadingTitleList>

      {/* 상세 내용 섹션 */}
      <S.DetailListContainer>
        <S.DetailListTitle />
        <S.DetailList>
          {/* 상세 항목 1 */}
          <S.DetailItem>
            <S.DetailItemTitle />
            <S.DetailItemText />
            <S.DetailItemText />
            <S.DetailItemText />
          </S.DetailItem>

          {/* 상세 항목 2 */}
          <S.DetailItem>
            <S.DetailItemTitle />
            <S.DetailItemText />
            <S.DetailItemText />
          </S.DetailItem>

          {/* 상세 항목 3 */}
          <S.DetailItem>
            <S.DetailItemTitle />
            <S.DetailItemText />
            <S.DetailItemText />
            <S.DetailItemText />
          </S.DetailItem>
        </S.DetailList>
      </S.DetailListContainer>
    </S.StyledLoadingContainer>
  );
};

export default Skeleton;
