import React from 'react';
import styled from 'styled-components';

const ShopMenuContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 1200px;
	height: 750px;
	padding: 20px 0;
	margin: 20px auto;
	list-style: none;
	background-color: #ffffff;
`;

const TabletProducts = () => (
	<ShopMenuContainer>
		<h1>Hello</h1>
	</ShopMenuContainer>
);

export default TabletProducts;
