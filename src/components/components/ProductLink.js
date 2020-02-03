import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkProduct = styled(Link)`
	display: block;
	width: 265px;
	padding: 20px 0;
	text-decoration: none;
`;

const ProductName = styled.p`
	margin: 0 auto;
	padding: 10px;
	text-align: center;
	color: #1b1b1b;
	white-space: pre;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const ProductImg = styled.img`
	width: 265px;
	height: 265px;
`;

const ProductLink = ({ match: { path }, product }) => (
	<LinkProduct to={`${path}/${product.id}`}>
		<ProductImg src={product.image} alt={product.id} />
		<ProductName>{product.title}</ProductName>
	</LinkProduct>
);

export default ProductLink;
