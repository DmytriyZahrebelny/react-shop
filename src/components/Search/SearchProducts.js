import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductLink from '../Shop/ProductLink';
import { searchProductsSelector } from '../../stores/Header/slector';

export const ProductsList = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 1200px;
	padding: 0;
	margin: 10px auto 0;
	list-style: none;
	background-color: #ffffff;
`;

export const ProductItem = styled.li`
	margin: 20px 0;
	padding-bottom: 20px;

	:hover {
		box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
	}
`;

export const Button = styled.p`
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

const SearchProducts = () => {
	const searchProducts = useSelector(state => searchProductsSelector(state));
	const history = useHistory();
	console.log(history);
	return (
		<ProductsList>
			{searchProducts.map(product => (
				<ProductItem key={product.title}>
					<ProductLink match={history.location} product={product} />
					{/* <Button onClick={getProductId} id={product.id}> */}
					<Button id={product.id}>Add to Cart</Button>
				</ProductItem>
			))}
		</ProductsList>
	);
};

export default SearchProducts;
