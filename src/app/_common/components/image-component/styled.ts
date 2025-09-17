import styled from 'styled-components';

export const StyledImageContainer = styled.div<{ $height?: number }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
