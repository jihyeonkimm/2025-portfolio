import Link from 'next/link';
import styled from 'styled-components';

export const StyledContactSection = styled.footer`
  padding: 100px 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20vw;

  ${({ theme }) => theme.responsive.mobile} {
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
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const ContactLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  transition: 0.3s;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.primary.orange};
    }
  }
`;
