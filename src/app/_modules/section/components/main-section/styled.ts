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

  ${({ theme }) => theme.responsive.mobile} {
    padding: 0 20px;
  }
`;

export const BlurContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80%;
  margin-top: 90px;
  z-index: -1;
`;

const blob1animation = keyframes`
  0% {top: 20%; left: 100px; transform: scale(1);}
  30% {top: 30%; left: 150px; transform: scale(1.2);}
  60% {top: 10%; left: 200px; transform: scale(1.3);}
  100% {top: 20%; left: 100px; transform: scale(1);}
`;

const blob2animation = keyframes`
  0% {top: 80px; right: -20px; transform: scale(1.2);}
  30% {top: 300px; right: -20px;transform: scale(1);}
  60% {top: 200px; right: 100px;transform: scale(1);}
  100% {top: 80px; right: -20px; transform: scale(1.2);}
`;

const blob3animation = keyframes`
  0% {top: 250px; right: 0px; transform: scale(1);}
  30% {top: 150px; right: 150px;transform: scale(1.4);}
  60% {top: 250px; right: 100px;transform: scale(1);}
  100% {top: 250px; right: 0px; transform: scale(1);}
`;

export const Blob = styled.div`
  border-radius: 100px;
  filter: blur(100px);

  &.blob1 {
    position: absolute;
    top: 200px;
    left: 100px;
    width: 40%;
    height: 40%;
    background-color: orange;
    animation: ${blob1animation} 8s infinite ease;
  }
  &.blob2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 40%;
    background-color: yellow;
    animation: ${blob2animation} 8s infinite ease;
  }
  &.blob3 {
    position: absolute;
    top: 300px;
    left: 400px;
    width: 40%;
    height: 40%;
    background-color: pink;
    animation: ${blob3animation} 8s infinite ease;
  }
`;

export const MainTitle = styled.h2`
  position: relative;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1px;
  white-space: pre-wrap;

  ${({ theme }) => theme.responsive.tablet} {
    font-size: 4rem;
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 2.6rem;
    line-height: 110%;
  }
`;

export const MainTitleText = styled.p<{ $isPlaying: boolean; $color?: string }>`
  display: inline-block;
  color: ${({ theme, $color }) =>
    $color === 'orange' ? theme.color.primary.orange : theme.color.common.black};
  opacity: 0;
  transform: translateY(20px);

  ${({ $isPlaying }) => $isPlaying && animation.showElement('0.5s')}
`;

export const MainText = styled.p`
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
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  background-color: #fff6;
  border-radius: 40px;
  font-size: 1.4rem;
  opacity: 0;
  z-index: 1;

  animation: ${showTag} 0.5s 2.8s forwards;

  ${({ theme }) => theme.responsive.tablet} {
    font-size: 1.2rem;
    padding: 15px 18px 14px 13px;
    gap: 0 8px;
  }

  ${({ theme }) => theme.responsive.mobile} {
    position: relative;
    top: unset;
    margin: 20px 0;
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
