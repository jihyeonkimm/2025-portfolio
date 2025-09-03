import { animation } from '@/app/_common/styles/theme/keyframes';
import styled from 'styled-components';

export const StyledIntroSection = styled.section`
  position: relative;
  padding: 8rem 0 10rem;
`;

export const IntroText = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.4rem;
  letter-spacing: -0.5px;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1rem;
  }
`;

export const IntroList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  margin-top: 60px;

  ${({ theme }) => theme.responsive.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }
`;

export const IntroItem = styled.li<{ $isVisible: boolean }>`
  align-self: stretch;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background.gray};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 0.3s;
  opacity: 0;
  transform: translateY(20px);

  ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}

  &:nth-child(2) {
    ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0.3s')}
  }

  &:nth-child(3) {
    ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0.6s')}
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.color.common.white};
      border-color: ${({ theme }) => theme.color.background.gray};
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
  }

  ${({ theme }) => theme.responsive.tablet} {
    padding: 1.5rem;
  }

  ${({ theme }) => theme.responsive.mobile} {
    padding: 1.2rem;
  }
`;

export const IntroItemTitle = styled.strong`
  font-size: 1.4rem;
  line-height: 120%;
  letter-spacing: -0.5px;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.3rem;
  }
`;

export const IntroItemText = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1rem;
  line-height: 140%;
  letter-spacing: -0.5px;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 0.9rem;
  }
`;

export const IntroItemIcon = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  margin-bottom: 60px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-bottom: 40px;
  }
`;
