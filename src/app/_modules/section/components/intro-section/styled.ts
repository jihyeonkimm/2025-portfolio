// import { animation } from '@/app/_common/styles/theme/keyframes';
import styled from 'styled-components';

export const FixedSection = styled.div<{ $bgOpacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246, 245, 244, ${({ $bgOpacity }) => $bgOpacity});
`;

export const TitleSection = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledIntroSection = styled.section<{ $bgOpacity: number }>`
  position: relative;
  height: 400vh;
  background-color: rgba(246, 245, 244, 1);
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100dvh;
  /* padding-top: 12rem; */

  ${({ theme }) => theme.responsive.mobile} {
    /* padding-top: 5rem; */
  }
`;

export const IntroWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 30px;
  }
`;

export const GradientText = styled.p`
  display: inline-block;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.primary.blue},
    ${({ theme }) => theme.color.primary.purple}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
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
  width: 80%;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4rem 6rem;
  padding: 2rem;
  transition: 0.3s;

  ${({ theme }) => theme.responsive.tablet} {
    padding: 1.5rem;
  }

  ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 40px);
    padding: 1.2rem;
  }
`;

export const IntroTextWrapper = styled.div`
  ${({ theme }) => theme.responsive.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const IntroItemTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.black};
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: center;
  word-break: keep-all;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 2rem;
  }
`;

export const IntroItemText = styled.p`
  margin-top: 18px;
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.8rem;
  line-height: 1.4;
  letter-spacing: -0.5px;
  white-space: break-spaces;
  word-break: keep-all;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const IntroItemIcon = styled.span`
  flex-shrink: 0;
  position: relative;
  display: block;
  width: 30rem;
  height: 30rem;

  ${({ theme }) => theme.responsive.mobile} {
    width: 13rem;
    height: 13rem;
    margin-bottom: 4rem;
  }
`;
