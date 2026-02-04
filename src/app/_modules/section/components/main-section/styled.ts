import styled, { keyframes } from 'styled-components';

export const StyledMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85dvh;

  ${({ theme }) => theme.responsive.mobile} {
    height: 100dvh;
    padding: 0 20px;
  }
`;

export const MainTitle = styled.h2`
  position: relative;
  font-size: clamp(4rem, 8vw, 9rem);
  /* font-weight: 700; */
  line-height: 120%;
  text-align: center;
  letter-spacing: -1.2px;
  white-space: pre-wrap;
  z-index: 1;

  ${({ theme }) => theme.responsive.tablet} {
    font-size: 5rem;
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 4rem;
    line-height: 110%;
  }
`;

export const TitleTextWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const showTitleText = keyframes`
  100% {
    transform: translate(0);
  }
`;

export const MainTitleText = styled.p<{ $color?: string }>`
  display: inline-block;
  transform: translateY(100%);

  animation: ${showTitleText} 0.8s 0.3s forwards;
`;

export const MainEmpText = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary.orange};
`;

export const LottieContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const showTag = keyframes`
  100% {
    opacity: 1;
  }
`;

export const Tag = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0 10px;
  padding: 20px 23px 19px 18px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(255, 255, 255, 0.27);
  color: ${({ theme }) => theme.color.common.black};
  font-size: 2rem;
  opacity: 0;
  z-index: 2;

  animation: ${showTag} 0.7s 1.4s forwards;

  ${({ theme }) => theme.responsive.tablet} {
    font-size: 1.6rem;
    padding: 15px 18px 14px 13px;
    gap: 0 8px;
  }

  ${({ theme }) => theme.responsive.mobile} {
    position: relative;
    top: unset;
    padding: 12px 15px 13px 12px;
    margin: 20px 0;
    font-size: 1.2rem;
    transform: unset !important;
  }
`;

export const Dot = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary.orange};
  border-radius: 50%;
`;
