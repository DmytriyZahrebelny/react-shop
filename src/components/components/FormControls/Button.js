import React from 'react';
import styled from 'styled-components';

export const ButtonInput = styled.button`
	display: block;
	width: 200px;
	padding: 10px;
	margin: 10px auto 0;
	padding: 10px;
	font-size: 20px;
	text-align: center;
	color: #1b1b1b;
	background-color: inherit;
	border: 2px solid #1b1b1b;
	border-radius: 24px;
	cursor: pointer;

	:hover {
		background-color: #1b1b1b;
		color: #ffffff;
	}
`;

const Button = ({ onClick, children }) => (
	<ButtonInput onClick={onClick} type='submit'>
		{children}
	</ButtonInput>
);

export default Button;
