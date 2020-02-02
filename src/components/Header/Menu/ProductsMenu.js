import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductsMenuContainer = styled.div`
	display: flex;
	width: 400px;
`;

const TestLink = styled(Link)`
	display: inline-block;
	padding: 15px 20px 15px;
	font-size: 16px;
	text-decoration: none;
	color: #fff;
`;

const ProductsMenu = () => (
	<ProductsMenuContainer>
		<TestLink to='/mobile'>Mobile</TestLink>
		<TestLink to='/tablet'>Tablet</TestLink>
		<TestLink to='/desktop'>Desktop</TestLink>
	</ProductsMenuContainer>
);

export default ProductsMenu;
