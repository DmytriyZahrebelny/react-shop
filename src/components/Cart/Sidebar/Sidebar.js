import React from 'react';
import styled from 'styled-components';

const AllPrice = styled.div`
	width: 250px;
	margin-top: 20px;
`;

const ToPayText = styled.b`
	display: block;
	margin: 45px 0;
	font-size: 24px;
	text-align: center;
	color: #000000;
`;

const Button = styled.input`
	display: block;
	width: 200px;
	padding: 10px;
	margin: 0 auto;
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

const Sidebar = ({ allPrice }) => (
	<AllPrice>
		<ToPayText>{`To pay: $${allPrice}`}</ToPayText>
		<Button type='submit' value='Buy' />
	</AllPrice>
);

export default Sidebar;
