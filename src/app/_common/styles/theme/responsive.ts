const breakpoint = {
  tablet: 1080,
  mobile: 768,
};

export type Responsive = {
  tablet: string;
  mobile: string;
};

export const responsive: Responsive = {
  tablet: `@media screen and (max-width: ${breakpoint.tablet}px)`,
  mobile: `@media screen and (max-width: ${breakpoint.mobile}px)`,
};
