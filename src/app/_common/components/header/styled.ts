import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 30px;
  width: 100%;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(31, 36, 38, 0.8);
  gap: 0px 30px;
  padding: 8px 13px;
  border-radius: 30px;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 30px;
  padding: 0px 10px;
  border-radius: 40px;
`;
