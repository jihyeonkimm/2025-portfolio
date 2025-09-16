// import { animation } from '@/app/_common/styles/theme/keyframes';
import styled from 'styled-components';

export const StyledIntroSection = styled.section`
  position: relative;
  height: 400vh;
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  padding-top: 12rem;

  ${({ theme }) => theme.responsive.mobile} {
    padding-top: 5rem;
  }
`;

// export const IntroText = styled.p<{ $isVisible: boolean }>`
//   margin-top: 3rem;
//   color: ${({ theme }) => theme.color.primary.gray};
//   font-size: 2.5rem;
//   letter-spacing: -0.5px;
//   opacity: 0;
//   transform: translateY(20px);

//   ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}

//   ${({ theme }) => theme.responsive.mobile} {
//     font-size: 1.6rem;
//   }
// `;

export const IntroWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 30px;
  }
`;

export const IntroList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 30px;
  }
`;

export const IntroItem = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 2rem;
  /* background: rgba(0, 0, 0, 0.16);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12); */
  transition: 0.3s;

  @media (hover: hover) {
    &:hover {
      /* background-color: ${({ theme }) => theme.color.common.white};
      border-color: ${({ theme }) => theme.color.background.gray}; */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
  }

  ${({ theme }) => theme.responsive.tablet} {
    padding: 1.5rem;
  }

  ${({ theme }) => theme.responsive.mobile} {
    width: calc(100% - 40px);
    padding: 1.2rem;
  }
`;

export const IntroItemTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: center;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 2rem;
  }
`;

export const IntroItemText = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: 0.011px;
  text-align: center;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const IntroItemIcon = styled.span`
  position: relative;
  display: block;
  width: 11rem;
  height: 11rem;
  margin-bottom: 5rem;

  ${({ theme }) => theme.responsive.mobile} {
    width: 9rem;
    height: 9rem;
    margin-bottom: 4rem;
  }
`;
