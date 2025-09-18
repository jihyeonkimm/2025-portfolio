import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoaderText = styled.p`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.1px;
  line-height: 140%;
`;
