import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.common.white};

  ${({ theme }) => theme.responsive.mobile} {
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
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.8rem;
  letter-spacing: -0.5px;
  line-height: 140%;
  cursor: pointer;
  z-index: 5;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
  -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));

  ${({ theme }) => theme.responsive.mobile} {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
