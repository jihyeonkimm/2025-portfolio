'use client';

import React, { ReactNode, useEffect } from 'react';
import * as S from './styled';
import { IconClose } from '../../assets/icons/components';

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Popup = ({ children, onClose, isOpen }: PopupProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton type='button' onClick={onClose}>
          <IconClose />
        </S.CloseButton>
        {children}
      </S.PopupContainer>
    </S.Overlay>
  );
};

export default Popup;
