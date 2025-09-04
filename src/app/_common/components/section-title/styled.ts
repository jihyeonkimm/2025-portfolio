import styled from 'styled-components';
import { animation } from '../../styles/theme/keyframes';

export const StyledSectionTitle = styled.h2<{ $isVisible: boolean }>`
  color: ${({ theme }) => theme.color.common.black};
  font-size: 5rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);

  ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 3.2rem;
  }
`;
