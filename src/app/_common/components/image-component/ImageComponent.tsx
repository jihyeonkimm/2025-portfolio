'use client';

import React from 'react';
import * as S from './styled';
import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
  height?: number;
}

const ImageComponent = ({ src, alt, height }: ImageComponentProps) => {
  if (!src) {
    return <span>이미지를 불러올 수 없습니다</span>;
  }

  return (
    <S.StyledImageContainer $height={height}>
      <Image src={src} alt={alt} fill sizes='100%' priority={true} />
    </S.StyledImageContainer>
  );
};

export default ImageComponent;
