import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const StyledLoadingContainer = styled.div`
  width: 100%;
`;

export const LoadingCover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 450px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;

  ${({ theme }) => theme.responsive.mobile} {
    min-height: 250px;
  }
`;

export const LoadingLogo = styled.span`
  position: relative;
  display: block;
  width: 150px;
  height: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.background.gray};
  border-radius: 10px;
  z-index: 1;

  ${({ theme }) => theme.responsive.mobile} {
    width: 70px;
    height: 30px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

export const LoadingTitle = styled.div`
  width: calc(100% - 60px);
  max-width: 600px;
  height: 56px;
  margin: 0 30px 20px;
  background-color: ${({ theme }) => theme.color.background.gray};
  border-radius: 10px;
  z-index: 1;

  ${({ theme }) => theme.responsive.mobile} {
    width: calc(100% - 40px);
    height: 42px;
    margin: 0 20px 20px;
  }
`;

export const LoadingTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  padding: 0 24px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const LoadingTitleItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled.p`
  width: 120px;
  height: 22px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 19px;
  }
`;

export const ItemText = styled.p`
  width: 100%;
  height: 25px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 22px;
  }
`;

export const SkillItemsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const SkillItem = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 7px;

  ${({ theme }) => theme.responsive.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const DetailListContainer = styled.div`
  padding: 40px 0;
  margin: 40px 24px 0;
  border-top: 1px solid ${({ theme }) => theme.color.primary.lightgray};

  ${({ theme }) => theme.responsive.mobile} {
    margin: 40px 20px 0;
  }
`;

export const DetailListTitle = styled.div`
  width: 120px;
  height: 28px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 25px;
  }
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 20px;
  }
`;

export const DetailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailItemTitle = styled.div`
  width: 60%;
  height: 31px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 25px;
  }
`;

export const DetailItemText = styled.div`
  width: 100%;
  height: 23px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.primary.lightgray} 0%,
    ${({ theme }) => theme.color.background.gray} 50%,
    ${({ theme }) => theme.color.primary.lightgray} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 20px;
  }
`;
