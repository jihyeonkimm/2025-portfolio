import styled from 'styled-components';

export const StyledLoadingContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.common.white};

  ${({ theme }) => theme.responsive.mobile} {
    margin: 0 0 20px;
    padding: 5px;
  }
`;

export const LoadingTitleContainer = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.lightgray};
`;

export const LoadingLogo = styled.span`
  position: relative;
  display: block;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.primary.lightgray};
  border-radius: 10px;

  ${({ theme }) => theme.responsive.mobile} {
    width: 70px;
    height: 30px;
  }
`;

export const LoadingTitle = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.color.primary.lightgray};
  border-radius: 10px;

  ${({ theme }) => theme.responsive.mobile} {
    width: 70px;
    height: 36px;
  }
`;

export const LoadingTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 40px;
  }
`;

export const LoadingTitleItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled.p`
  width: 40%;
  height: 22px;
  background-color: ${({ theme }) => theme.color.primary.lightgray};
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 19px;
  }
`;

export const ItemText = styled.p`
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.color.primary.lightgray};
  border-radius: 5px;

  ${({ theme }) => theme.responsive.mobile} {
    height: 22px;
  }
`;
