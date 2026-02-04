import styled from 'styled-components';
import { animation } from '../../styles/theme/keyframes';

export const StyledSectionTitle = styled.h2<{
  $isVisible: boolean;
  $align?: 'left' | 'center' | 'right';
  $color?: string;
}>`
  color: ${({ $color, theme }) =>
    $color === 'white' ? theme.color.common.white : theme.color.common.black};
  font-size: 5rem;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: -1px;
  opacity: 0;
  transform: translateY(30px);
  text-align: ${({ $align }) => $align || 'left'};

  ${({ $isVisible }) => $isVisible && animation.showElement('0.5s', '0s')}

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 3.2rem;
  }
`;
