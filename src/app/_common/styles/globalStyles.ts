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
		color: #191919;
		background-color: #ffffff;
		font-size: 62.5%;
		font-family: 'Pretendard', sans-serif;

		::-webkit-scrollbar {
			width: 5px;
			background-color: transparent;
		}
		
		::-webkit-scrollbar-thumb {	
			width: 5px;
			background-color: ${({ theme }) => theme.color.primary.lightgray};
			border-radius: 10px;
		}
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
