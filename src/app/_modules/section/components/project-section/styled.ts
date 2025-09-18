import { animation } from '@/app/_common/styles/theme/keyframes';
import styled, { css, keyframes } from 'styled-components';

export const StyledProjectSection = styled.section`
  position: relative;
  padding: 10rem 0;
`;

export const ProjectList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 150px;
  margin: 10rem 0;

  ${({ theme }) => theme.responsive.mobile} {
    gap: 100px;
    margin-top: 60px;
  }
`;

export const ProjectItem = styled.li<{ $isVisible: boolean }>`
  position: relative;
  width: 50%;
  opacity: 0;
  transform: translateY(20px) translateZ(0) scale(0.9);
  transform-origin: 50% 50%;

  &:nth-child(even) {
    align-self: flex-end;
  }

  ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}

  ${({ theme }) => theme.responsive.mobile} {
    width: 100%;
  }
`;

export const ProjectItemButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
`;

const imageOverlay = keyframes`
  0% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`;

export const ProjectItemImage = styled.span<{ $isVisible: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.515;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;

  ${({ theme }) => theme.responsive.mobile} {
    margin-bottom: 20px;
    border-radius: 10px;
  }

  & img {
    width: 100%;
    transform-origin: center;
    transition: 0.3s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #007dc8 19%, #6e28b4 95%);

    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${imageOverlay} 1s 0.3s cubic-bezier(0.16, 0.57, 0.76, 0.42) forwards;
      `}
  }

  @media (hover: hover) {
    &:hover > img {
      transform: scale(1.05);
    }
  }
`;

export const ProjectItemTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: left;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const ProjectTagText = styled.p`
  white-space: nowrap;
  transform: translateY(-20px);
  transition: 0.5s;
  transition-delay: 1.3s;
`;

export const ProjectItemTag = styled.span<{ $isVisible: boolean }>`
  display: inline-block;
  max-width: ${({ $isVisible }) => ($isVisible ? '500px' : '10px')};
  height: 22px;
  margin-top: 10px;
  line-height: 22px;
  padding: 0px 10px;
  color: ${({ theme }) => theme.color.common.white};
  border: 1px solid ${({ theme }) => theme.color.common.white};
  border-radius: 50px;
  /* background-color: ${({ theme }) => theme.color.common.white}; */
  overflow: hidden;
  transition: 0.8s;
  transition-delay: 0.5s;

  & ${ProjectTagText} {
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0px)' : 'translateY(-20px)')};
  }

  ${({ theme }) => theme.responsive.mobile} {
    height: 18px;
    line-height: 18px;
    padding: 0px 6px;
    font-size: 1rem;
  }
`;

export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  line-height: 22px;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.color.common.black};
  border-radius: 50px;
`;
