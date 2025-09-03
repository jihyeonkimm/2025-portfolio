'use client';

import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export const useIsMobile = (): boolean => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = isMobile || window.innerWidth <= 768;
      setIsMobileView(isMobileDevice);
    };

    checkMobile();

    // resize시 너무 자주 발생하지 않게 debounce (100ms)
    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        checkMobile();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileView;
};
