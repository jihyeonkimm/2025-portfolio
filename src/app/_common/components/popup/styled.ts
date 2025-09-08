import styled from 'styled-components';

export const Overlay = styled.div`
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
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  position: relative;
  width: calc(100vw - 40px);
  max-width: 960px;
  height: calc(100dvh - 80px);
  max-height: 90vh;
  padding: 20px 10px 20px 20px;
  background-color: ${({ theme }) => theme.color.common.white};
  border-radius: 20px;
  overflow: hidden;
`;

export const PopupChildrenContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 0 10px 20px 0;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: sticky;
  top: 10px;
  left: 100%;
  margin-right: 15px;
  cursor: pointer;
  z-index: 1001;

  ${({ theme }) => theme.responsive.mobile} {
    top: 10px;
  }
`;
