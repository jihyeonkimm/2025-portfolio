import styled, { css } from 'styled-components';
import { animation } from '../../styles/theme/keyframes';

export const StyledHeader = styled.header<{ $scrollStart: boolean }>`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  transition: 0.23s ease;
  will-change: transform;
  z-index: 1000;

  ${({ $scrollStart }) =>
    $scrollStart &&
    css`
      transform: translate(-50%, 20px);
      width: 80%;
      background: rgba(18, 18, 18, 0.8);
      backdrop-filter: blur(20px);
      box-shadow: 0 0 0 1px #28282a;
      border-radius: 100px;
    `}

  ${({ theme }) => theme.responsive.mobile} {
    justify-content: space-between;
    padding: 5px 15px;

    ${({ $scrollStart }) =>
      $scrollStart &&
      css`
        transform: translate(-50%, 10px);
        width: 90%;
      `}
  }
`;

export const Logo = styled.h1`
  position: relative;
  left: 0;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  ${({ theme }) => theme.responsive.mobile} {
    width: 30px;
    height: 30px;
  }

  & a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 40px;
  padding: 8px 10px;

  ${({ theme }) => theme.responsive.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.common.white : theme.color.primary.gray};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary.blue};
  }
`;

export const MobileMenuButton = styled.button<{ $isMobileMenuOpen: boolean }>`
  position: relative;
  display: none;

  ${({ theme }) => theme.responsive.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 13px;
  }
`;

export const MenuLine = styled.span`
  ${({ theme }) => theme.responsive.mobile} {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.common.white};
  }
`;

export const MobileMenuContainer = styled.div<{ $isClosing: boolean }>`
  opacity: 0;
  visibility: hidden;

  ${({ theme }) => theme.responsive.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(40px);
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1300;

    ${({ $isClosing }) =>
      $isClosing ? animation.opacityDown('0.3s', '0s') : animation.opacityUp('0.3s', '0s')};
  }
`;

export const MobileMenuList = styled.ul`
  display: none;

  ${({ theme }) => theme.responsive.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  display: none;

  ${({ theme }) => theme.responsive.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 13px;

    & > ${MenuLine} {
      &:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      &:nth-child(2) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
`;
