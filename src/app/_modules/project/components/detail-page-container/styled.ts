import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  width: 100%;
  padding: 7rem 16rem;
  background-color: ${({ theme }) => theme.color.common.white};

  ${({ theme }) => theme.responsive.mobile} {
    padding: 70px 20px;
  }
`;

export const HomeButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  padding: 20px;
  font-size: 1.8rem;
  letter-spacing: -0.5px;
  line-height: 140%;
  cursor: pointer;

  ${({ theme }) => theme.responsive.mobile} {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
