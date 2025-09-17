'use client';

import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import useFirebaseImage from '@/app/hooks/useFirebaseImage';

interface ImageComponentProps {
  storagePath: string;
  alt: string;
  height?: number;
}

const ImageComponent = ({ storagePath, alt, height }: ImageComponentProps) => {
  const { imageUrl, loading, error } = useFirebaseImage(storagePath);

  if (loading) {
    return null;
  }

  if (error || !imageUrl) {
    return <span>이미지를 불러올 수 없습니다</span>;
  }

  return (
    <S.StyledImageContainer $height={height}>
      <Image src={imageUrl} alt={alt} fill sizes='100%' priority={true} />
    </S.StyledImageContainer>
  );
};

export default ImageComponent;
