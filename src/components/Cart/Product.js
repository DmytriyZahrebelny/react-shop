import React from 'react';
import styled from 'styled-components';

const CartProduct = styled.li`
	display: flex;
	justify-content: space-between;
	width: 830px;
	padding: 10px 0;
	border-bottom: 2px solid #fb4128;
`;

const ProductImg = styled.img`
	display: block;
	width: 130px;
	height: 130px;
`;

const ProductDescriptions = styled.span`
	width: 400px;
	align-self: center;
	font-size: 20px;
	color: #000000;
	text-align: center;
`;

const ProductPrice = styled.span`
	align-self: center;
	font-size: 20px;
	color: #000000;
`;

const AmountProduct = styled.input`
	width: 140px;
	align-self: center;
	font-size: 20px;
	text-align: center;
	color: #000000;
	background-color: inherit;
	border: none;
`;

const Product = ({ product, quantityProducts }) => (
	<CartProduct>
		<ProductImg src={product.image} alt={product.title} />
		<ProductPrice>{`$${product.price}`}</ProductPrice>
		<AmountProduct type='text' value={`Added: ${quantityProducts[product.id]}`} disabled />
		<ProductDescriptions>{product.title}</ProductDescriptions>
	</CartProduct>
);

export default Product;
