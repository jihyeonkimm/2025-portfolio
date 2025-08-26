import styled from 'styled-components';
import { animation } from '../../styles/theme/keyframes';

export const StyledSectionTitle = styled.h2<{ $isVisible: boolean }>`
  color: ${({ theme }) => theme.color.common.black};
  font-size: 3rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(20px);

  ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}
`;
