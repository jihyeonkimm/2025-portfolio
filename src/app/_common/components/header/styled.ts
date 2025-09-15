import styled from 'styled-components';
import { animation } from '../../styles/theme/keyframes';

export const StyledHeader = styled.header<{ $scrollStart: boolean }>`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
  background-color: ${({ $scrollStart }) => ($scrollStart ? 'rgba(0, 0, 0, 0.2)' : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 1000;

  ${({ theme }) => theme.responsive.mobile} {
    justify-content: space-between;
    padding: 10px 20px;
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
  margin: 0 auto;
  gap: 0px 40px;
  padding: 8px 13px;
  border-radius: 30px;

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
  z-index: 1400;

  ${({ theme }) => theme.responsive.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 13px;
  }
`;

export const MenuLine = styled.span<{ $isMobileMenuOpen: boolean }>`
  ${({ theme }) => theme.responsive.mobile} {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.common.white};
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${(props) =>
        props.$isMobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isMobileMenuOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.$isMobileMenuOpen ? 'translateY(-5px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
    }
  }
`;

export const MobileMenuContainer = styled.div<{ $isMobileMenuOpen: boolean }>`
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

    ${({ $isMobileMenuOpen }) =>
      $isMobileMenuOpen ? animation.opacityUp('0.3s', '0s') : animation.opacityDown('0.3s', '0s')};
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
