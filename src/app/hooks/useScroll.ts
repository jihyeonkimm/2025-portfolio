'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollOptionType {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useScroll = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: ScrollOptionType = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { isVisible, elementRef };
};

export default useScroll;
