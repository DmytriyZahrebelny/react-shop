import React from 'react';
import styled from 'styled-components';

export const ShopMenuContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 1200px;
	height: 750px;
	padding: 20px 0;
	margin: 20px auto;
	list-style: none;
	background-color: #ffffff;
`;

const DesktopProducts = () => (
	<ShopMenuContainer>
		<h1>Hello</h1>
	</ShopMenuContainer>
);

export default DesktopProducts;
