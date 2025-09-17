import Link from 'next/link';
import styled from 'styled-components';

export const StyledContactSection = styled.footer`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.color.background.darkgray};
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20vw;

  ${({ theme }) => theme.responsive.mobile} {
    justify-content: flex-start;
    padding-right: 0;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px 0;
  margin-top: 80px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const ContactItemTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.5px;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 2rem;
  }
`;

export const ContactLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  transition: 0.3s;

  @media (hover: hover) {
    &:hover {
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.color.primary.blue},
        ${({ theme }) => theme.color.primary.purple}
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.4rem;
  }
`;
