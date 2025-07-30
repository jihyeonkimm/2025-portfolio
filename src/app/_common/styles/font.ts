import { css } from 'styled-components';

const pretendard = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: fallback;
    src: local('Pretendard Black'),
      url('/assets/fonts/pretendard/Pretendard-Black.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: fallback;
    src: local('Pretendard ExtraBold'),
      url('/assets/fonts/pretendard/Pretendard-ExtraBold.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: fallback;
    src: local('Pretendard Bold'),
      url('/assets/fonts/pretendard/Pretendard-Bold.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: fallback;
    src: local('Pretendard SemiBold'),
      url('/assets/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: fallback;
    src: local('Pretendard Medium'),
      url('/assets/fonts/pretendard/Pretendard-Medium.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: fallback;
    src: local('Pretendard Regular'),
      url('/assets/fonts/pretendard/Pretendard-Regular.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: fallback;
    src: local('Pretendard Light'),
      url('/assets/fonts/pretendard/Pretendard-Light.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: fallback;
    src: local('Pretendard ExtraLight'),
      url('/assets/fonts/pretendard/Pretendard-ExtraLight.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: fallback;
    src: local('Pretendard Thin'),
      url('/assets/fonts/pretendard/Pretendard-Thin.woff2') format('woff2'),
      url('/assets/fonts/pretendard/Pretendard-Thin.woff') format('woff');
  }
`;

export default css`
  ${pretendard}
`;
