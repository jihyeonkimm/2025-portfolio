import Link from 'next/link';
import styled from 'styled-components';

export const SideBarContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 6px;
  background: rgba(49, 49, 49, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 0 1px #28282a;
  border-radius: 100px;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;

  ${({ theme }) => theme.responsive.mobile} {
    display: none;
  }
`;

export const SideBarTooltip = styled.span`
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  transform: translate(0px, -50%);
  padding: 6px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.common.black};
  font-size: 1.3rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.common.white};
  opacity: 0;
  visibility: hidden;
  transition: 0.25s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: -9px;
    top: 50%;
    transform: translateY(-50%);
    width: 0px;
    height: 0px;
    border-left: 5px solid ${({ theme }) => theme.color.common.white};
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

export const SideBarLink = styled(Link)`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 100px;
  font-size: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (hover: hover) {
    &:hover {
      ${SideBarTooltip} {
        opacity: 1;
        transform: translate(5px, -50%);
        visibility: visible;
      }
    }
  }
`;
