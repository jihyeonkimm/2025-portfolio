'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from './font';

const GlobalStyle = createGlobalStyle`
  ${reset}
	${font}
	* {
		box-sizing: border-box;
		font-family: 'Pretendard', sans-serif;
	}

	body {
		color: #111;
		font-size: 62.5%;
		font-family: 'Pretendard', sans-serif;
	}
`;

export default GlobalStyle;
