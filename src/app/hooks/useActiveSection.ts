'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'contact'] as const;
type SectionId = (typeof SECTION_IDS)[number];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollStart, setScrollStart] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollStart(window.scrollY > 10);

      const sections = SECTION_IDS.map((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            element,
          };
        }
        return null;
      }).filter(Boolean);

      if (sections.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      const firstVisibleSection = sections.find((section) => section && section.bottom > 0);

      if (!firstVisibleSection) return;

      // 뷰포트 중앙에 가장 가까운 섹션 찾기
      let closestSection = firstVisibleSection.id;
      let minDistance = Infinity;

      sections.forEach((section) => {
        if (section) {
          const sectionCenter = (section.top + section.bottom) / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          // 섹션이 뷰포트에 보이고, 중앙에 더 가까우면 해당 섹션 활성화
          if (
            section.top <= viewportCenter &&
            section.bottom >= viewportCenter &&
            distance < minDistance
          ) {
            minDistance = distance;
            closestSection = section.id as SectionId;
          }
        }
      });

      setActiveSection(closestSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { activeSection, scrollToSection, SECTION_IDS, scrollStart };
};

export default useActiveSection;
