export type Color = {
  common: {
    black: string;
    white: string;
  };
  primary: {
    blue: string;
    purple: string;
    gray: string;
    lightgray: string;
  };
  background: {
    gray: string;
    darkgray: string;
  };
};

export const color: Color = {
  common: {
    black: '#333',
    white: '#ffffff',
  },
  primary: {
    blue: '#009fff',
    purple: '#b66dff',
    gray: '#808080',
    lightgray: '#c5c5c5',
  },
  background: {
    gray: '#f9f9f9',
    darkgray: 'rgb(29, 29, 31)',
  },
};
