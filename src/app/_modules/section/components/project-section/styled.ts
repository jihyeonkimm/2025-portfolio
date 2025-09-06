import { animation } from '@/app/_common/styles/theme/keyframes';
import styled, { css, keyframes } from 'styled-components';

export const StyledProjectSection = styled.section`
  position: relative;
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.color.background.gray};
`;

export const ProjectList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin: 10rem 0;

  ${({ theme }) => theme.responsive.mobile} {
    gap: 40px;
    margin-top: 60px;
  }
`;

export const ProjectItem = styled.li<{ $isVisible: boolean }>`
  position: relative;
  width: 50%;
  opacity: 0;
  transform: translateY(20px);

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
  }

  & img {
    width: 100%;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary.orange};

    ${({ $isVisible }) =>
      $isVisible &&
      css`
        animation: ${imageOverlay} 1s cubic-bezier(0.16, 0.57, 0.76, 0.42) forwards;
      `}
  }
`;

export const ProjectItemTitle = styled.strong`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: left;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const ProjectItemTag = styled.span`
  display: inline-block;
  /* max-width: 22px; */
  height: 22px;
  margin-top: 10px;
  line-height: 22px;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.color.common.black};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.common.white};
  overflow: hidden;

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
