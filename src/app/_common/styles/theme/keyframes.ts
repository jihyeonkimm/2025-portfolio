import { css, keyframes } from 'styled-components';

const showElement = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const animation = {
  showElement: (duration = '0.5s', delay = '0s') => css`
    animation: ${showElement} ${duration} ${delay} forwards ease-out;
  `,
};
