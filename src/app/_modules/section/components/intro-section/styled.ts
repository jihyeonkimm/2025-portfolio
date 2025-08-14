import styled from 'styled-components';

export const StyledIntroSection = styled.section`
  position: relative;
  padding: 4rem 0;
`;

export const IntroText = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.4rem;
  letter-spacing: -0.5px;
`;

export const IntroList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0 20px;
  margin-top: 30px;
`;

export const IntroItem = styled.li`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background.gray};
  border-radius: 10px;
`;

export const IntroItemTitle = styled.strong`
  font-size: 1.6rem;
  letter-spacing: -0.5px;
`;

export const IntroItemText = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.2rem;
  letter-spacing: -0.5px;
`;

export const IntroItemIcon = styled.span`
  display: block;
  width: 40px;
  height: 40px;
`;
