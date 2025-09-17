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
  /* padding: 0px 10px 0px 20px; */
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 0 0 1px #28282a;
  border-radius: 20px;
  overflow: hidden;
  transform: scale(0.95) translate(-50%, -50%);
  transform-origin: top left;
  will-change: transform;
  animation: ${({ $isClosing }) => ($isClosing ? scaleOut : scaleIn)} 0.3s ease-in-out forwards;
`;

export const PopupChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-right: 15px;
  cursor: pointer;
  z-index: 1001;

  ${({ theme }) => theme.responsive.mobile} {
    top: 10px;
  }
`;
