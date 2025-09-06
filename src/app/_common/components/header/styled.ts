import styled, { css, keyframes } from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;

  ${({ theme }) => theme.responsive.mobile} {
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

export const Logo = styled.h1`
  position: relative;
  left: 0;
  width: 70px;
  height: 70px;
  flex-shrink: 0;

  ${({ theme }) => theme.responsive.mobile} {
    width: 50px;
    height: 50px;
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
  gap: 0px 30px;
  padding: 8px 13px;
  border-radius: 30px;

  ${({ theme }) => theme.responsive.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary.orange : theme.color.common.black};
  font-size: 1.6rem;
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary.orange};
  }
`;

export const MobileMenuButton = styled.button<{ $isMobileMenuOpen: boolean }>`
  position: relative;
  display: none;
  z-index: 100;

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
    background-color: ${({ theme }) => theme.color.common.black};
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

export const MobileMenuContainer = styled.div`
  display: none;

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
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.9);
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
