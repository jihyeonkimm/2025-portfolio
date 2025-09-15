'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import * as S from './styled';
import { IconClose } from '../../assets/icons/components';

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Popup = ({ children, onClose, isOpen }: PopupProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // 애니메이션 시간과 맞춤
  };

  if (!isOpen && !isClosing) return null;

  return (
    <S.Overlay onClick={handleClose} $isClosing={isClosing}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()} $isClosing={isClosing}>
        <S.CloseButton type='button' onClick={handleClose}>
          <IconClose />
        </S.CloseButton>
        <S.PopupChildrenContainer>{children}</S.PopupChildrenContainer>
      </S.PopupContainer>
    </S.Overlay>
  );
};

export default Popup;
