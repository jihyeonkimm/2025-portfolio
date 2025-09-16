import { animation } from '@/app/_common/styles/theme/keyframes';
import styled, { keyframes } from 'styled-components';

export const StyledMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  /* background: linear-gradient(180deg, #009fff 0%, rgba(194, 41, 255, 0.6) 100%); */

  ${({ theme }) => theme.responsive.mobile} {
    padding: 0 20px;
  }
`;

export const BlurContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 20%;
  }
`;

const blob1animation = keyframes`
  0% {top: 10%; left: 30%; transform: scale(1);}
  25% {top: 30%; left: 0%; transform: scale(1.2);}
  50% {top: 40%; left: 30%; transform: scale(1.1);}
  75% {top: 30%; left: 50%; transform: scale(1);}
  100% {top: 10%; left: 30%; transform: scale(1);}
`;

const blob2animation = keyframes`
  0% {top: 30%; left: 10%; transform: scale(1);}
  25% {top: 45%; left: 30%; transform: scale(1);}
  50% {top: 20%; left: 60%; transform: scale(1.2);}
  75% {top: 15%; left: 30%; transform: scale(1.1);}
  100% {top: 30%; left: 10%; transform: scale(1);}
`;

const blob3animation = keyframes`
  0% {top: 40%; left: 40%; transform: scale(1);}
  25% {top: 20%; left: 60%; transform: scale(1);}
  50% {top: 0%; left: 30%; transform: scale(1.1);}
  75% {top: 20%; left: 0%; transform: scale(1.2);}
  100% {top: 40%; left: 40%; transform: scale(1);}
`;

export const Blob = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 100px;
  filter: blur(120px);

  &.blob1 {
    position: absolute;
    top: 10%;
    left: 30%;
    background-color: rgba(0, 102, 255, 0.4);
    animation: ${blob1animation} 8s infinite ease;
  }
  &.blob2 {
    position: absolute;
    top: 30%;
    left: 10%;
    background-color: rgba(43, 0, 255, 0.4);
    animation: ${blob2animation} 8s infinite ease;
  }
  &.blob3 {
    position: absolute;
    top: 40%;
    left: 40%;
    background-color: rgba(122, 0, 204, 0.4);
    animation: ${blob3animation} 8s infinite ease;
  }

  ${({ theme }) => theme.responsive.mobile} {
    width: 35%;
    height: 30%;
    filter: blur(80px);
  }
`;

export const MainTitle = styled.h2`
  position: relative;
  font-size: clamp(4rem, 8vw, 9rem);
  font-weight: 700;
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

export const MainTitleText = styled.p<{ $color?: string; $isPlaying: boolean }>`
  display: inline-block;
  color: ${({ theme, $color }) =>
    $color === 'blue' ? theme.color.primary.blue : theme.color.common.white};
  opacity: 0;
  transform: translateY(20px);

  ${({ $isPlaying }) => $isPlaying && animation.showElement('0.5s')}
`;

export const MainText = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary.blue};
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
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  color: ${({ theme }) => theme.color.common.white};
  font-size: 2rem;
  opacity: 0;
  z-index: 2;

  animation: ${showTag} 0.5s 2.8s forwards;

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
  background-color: ${({ theme }) => theme.color.primary.blue};
  border-radius: 50%;
`;
