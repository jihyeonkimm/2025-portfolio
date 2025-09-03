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

	html, body {
		color: #111;
		font-size: 62.5%;
		font-family: 'Pretendard', sans-serif;
	}

	button {
		padding: 0;
		border-width: 0;
		background-color: transparent;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export default GlobalStyle;
