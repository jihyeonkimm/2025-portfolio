'use client';

import * as S from './styled';

const Loading = () => {
  return (
    <S.StyledLoadingContainer>
      <S.LoadingTitleContainer>
        <S.LoadingLogo />
        <S.LoadingTitle />
        <S.LoadingTitleList>
          <S.LoadingTitleItem>
            <S.ItemTitle />
            <S.ItemText />
          </S.LoadingTitleItem>
          <S.LoadingTitleItem>
            <S.ItemTitle />
            <S.ItemText />
          </S.LoadingTitleItem>
          <S.LoadingTitleItem>
            <S.ItemTitle />
            <S.ItemText />
          </S.LoadingTitleItem>
        </S.LoadingTitleList>
      </S.LoadingTitleContainer>
      <S.LoadingTitleList>
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>
        <S.LoadingTitleItem>
          <S.ItemTitle />
          <S.ItemText />
        </S.LoadingTitleItem>
      </S.LoadingTitleList>
    </S.StyledLoadingContainer>
  );
};

export default Loading;
