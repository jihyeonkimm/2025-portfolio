import { css, keyframes } from 'styled-components';

const showElement = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) translateZ(0) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateZ(0) scale(1);
  }
`;

const opacityUp = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const opacityDown = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden; 
  }
`;

export const animation = {
  showElement: (duration = '0.3s', delay = '0s') => css`
    animation: ${showElement} ${duration} ${delay} forwards ease-out;
  `,

  opacityUp: (duration = '0.5s', delay = '0s') => css`
    animation: ${opacityUp} ${duration} ${delay} forwards ease-out;
  `,

  opacityDown: (duration = '0.5s', delay = '0s') => css`
    animation: ${opacityDown} ${duration} ${delay} forwards ease-out;
  `,
};
