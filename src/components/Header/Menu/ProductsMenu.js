import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductsMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 0 0 30px;
	width: 270px;
`;

const ProductLink = styled(Link)`
	display: block;
	font-size: 20px;
	text-decoration: none;
	font-weight: bold;
	color: #ffffff;
`;

const ProductsMenu = () => (
	<ProductsMenuContainer>
		<ProductLink to='/mobile'>Mobile</ProductLink>
		<ProductLink to='/tablet'>Tablet</ProductLink>
		<ProductLink to='/desktop'>Desktop</ProductLink>
	</ProductsMenuContainer>
);

export default ProductsMenu;
