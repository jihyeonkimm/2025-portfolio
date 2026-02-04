import { animation } from '@/app/_common/styles/theme/keyframes';
import styled, { css, keyframes } from 'styled-components';

export const StyledProjectSection = styled.section`
  position: relative;
  padding: 20rem 0 10rem;
`;

export const StickyContainer = styled.div`
  position: relative;
  height: 60dvh;

  ${({ theme }) => theme.responsive.mobile} {
    height: 70dvh;
  }
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 150px;
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const ProjectList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 3rem;
  margin: 20rem 0 10rem;
  padding: 0 8rem;

  ${({ theme }) => theme.responsive.mobile} {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 60px;
    padding: 0;
  }
`;

export const ProjectItem = styled.li<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
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

export const ProjectItemImage = styled.span<{ $isVisible: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.515;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(166, 166, 166, 0.3);
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
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);
    border: 1px solid rgba(255, 255, 255, 0.27);

    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${imageBlur} 1s 0.3s ease-out forwards;
      `}
  }
`;

export const ProjectItemTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.black};
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: left;
  transition: color 0.3s;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const ProjectItemButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;

  @media (hover: hover) {
    &:hover ${ProjectItemImage} img {
      transform: scale(1.05);
    }

    &:hover ${ProjectItemTitle} {
      color: ${({ theme }) => theme.color.primary.orange};
    }
  }
`;

const imageBlur = keyframes`
  0% {
    backdrop-filter: blur(6.3px);
    opacity: 1;
  }
  100% {
    backdrop-filter: blur(0px);
    opacity: 0;
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
  color: ${({ theme }) => theme.color.primary.gray};
  border: 1px solid ${({ theme }) => theme.color.primary.gray};
  border-radius: 50px;
  background-color: #fff;
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
