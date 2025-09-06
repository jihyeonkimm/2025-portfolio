'use client';

import React, { ReactNode } from 'react';
import * as S from './styled';
import { IconClose } from '../../assets/icons/components';

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}

const Popup = ({ children, onClose }: PopupProps) => {
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
