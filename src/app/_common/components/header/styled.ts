import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
`;

export const Logo = styled.h1`
  position: relative;
  left: 0;
  width: 70px;
  height: 70px;

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
  /* background-color: rgba(31, 36, 38, 0.8); */
  gap: 0px 30px;
  padding: 8px 13px;
  border-radius: 30px;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.color.common.black};
  font-size: 1.2rem;
  /* text-transform: uppercase; */
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 40px;
`;
