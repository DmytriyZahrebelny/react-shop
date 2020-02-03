import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ProductLink from '../../components/ProductLink';
import { searchProductsSelector } from '../../../stores/Header/slector';
import * as actions from '../../../stores/Cart/cartActions';

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
	color: #1b1b1b;
	border: 2px solid #1b1b1b;
	border-radius: 24px;
	cursor: pointer;

	:hover {
		background-color: #1b1b1b;
		color: #ffffff;
	}
`;

const NothingFoundTitle = styled.h1`
	width: 1200px;
	min-height: 800px;
	margin: 0;
	padding: 40px;
`;

const SearchProducts = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	const searchProducts = useSelector(state => searchProductsSelector(state));

	if (!searchProducts.length) {
		return <NothingFoundTitle>Nothing found</NothingFoundTitle>;
	}

	return (
		<ProductsList>
			{searchProducts.map(product => (
				<ProductItem key={product.title}>
					<ProductLink match={match} product={product} />
					<Button onClick={() => dispatch(actions.addProduct(product.id))}>Add to Cart</Button>
				</ProductItem>
			))}
		</ProductsList>
	);
};

export default SearchProducts;
