import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement;
  container?: string;
}

const Portal = ({ children, container = 'modal-root' }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined') return <></>;

  if (mounted) {
    const containerElement = document.getElementById(container);
    if (!containerElement) {
      return <></>;
    }
    return createPortal(children, containerElement);
  }

  return <></>;
};

export default Portal;
