export type Color = {
  common: {
    black: string;
    white: string;
  };
  primary: {
    orange: string;
    gray: string;
    lightgray: string;
  };
  background: {
    gray: string;
  };
};

export const color: Color = {
  common: {
    black: '#111111',
    white: '#ffffff',
  },
  primary: {
    orange: '#f74932',
    gray: '#636363',
    lightgray: '#c5c5c5',
  },
  background: {
    gray: '#f9f9f9',
  },
};
