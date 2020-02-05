import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ProductLink from '../../components/ProductLink';
import Button from '../../components/FormControls/Button';
import { searchProductsSelector } from '../../../stores/Header/slector';
import * as actions from '../../../stores/Cart/cartStore';

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
