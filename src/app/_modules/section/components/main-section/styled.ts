import { animation } from '@/app/_common/styles/theme/keyframes';
import styled from 'styled-components';

export const StyledMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;

export const MainTitle = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.1px;
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

  animation: show 0.5s 2.8s forwards;

  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;

export const Dot = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary.orange};
  border-radius: 50%;
`;
