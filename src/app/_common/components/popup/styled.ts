import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

const scaleOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translate(-50%, -50%);
  }
`;

export const Overlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.3s
    cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

export const PopupContainer = styled.div<{ $isClosing: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100vw - 40px);
  max-width: 960px;
  height: calc(100dvh - 80px);
  max-height: 90vh;
  background-color: ${({ theme }) => theme.color.common.white};
  box-shadow: 0 0 5px rgba(135, 134, 134, 0.5);
  border-radius: 16px;
  overflow: hidden;
  transform: scale(0.95) translate(-50%, -50%);
  transform-origin: top left;
  will-change: transform;
  animation: ${({ $isClosing }) => ($isClosing ? scaleOut : scaleIn)} 0.3s ease-in-out forwards;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PopupChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1001;

  & > svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.responsive.mobile} {
    top: 10px;
  }
`;
