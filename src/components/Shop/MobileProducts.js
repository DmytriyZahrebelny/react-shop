import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ProductLink from './ProductLink';

const ProductsList = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 1200px;
	padding: 0;
	margin: 10px auto 0;
	list-style: none;
	background-color: #ffffff;
`;

const ProductItem = styled.li`
	margin: 20px 0;
	padding-bottom: 20px;

	:hover {
		box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
	}
`;

const Button = styled.p`
	display: block;
	width: 200px;
	padding: 10px;
	margin: 0 auto;
	padding: 10px;
	font-size: 20px;
	text-align: center;
	color: #ff8f33;
	border: 2px solid #fb4128;
	border-radius: 24px;
	cursor: pointer;

	:hover {
		background-color: #ff5122;
		color: #ffffff;
	}
`;

const MobileProducts = ({ products: { products }, addProduct }) => {
	const match = useRouteMatch();

	return (
		<ProductsList>
			{products.map(product => (
				<ProductItem key={product.title}>
					<ProductLink match={match} product={product} />
					<Button onClick={addProduct} id={product.id}>
						Add to Cart
					</Button>
				</ProductItem>
			))}
		</ProductsList>
	);
};

export default MobileProducts;
