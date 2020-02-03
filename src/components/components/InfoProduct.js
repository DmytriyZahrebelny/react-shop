import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../stores/Cart/cartStore';

export const Product = styled.div`
	display: flex;
	width: 1200px;
	padding: 20px 0;
	margin: 10px auto 0;
	background-color: #ffffff;
`;

export const ProductTitle = styled.h1`
	color: #000000;
`;

export const ProductDescription = styled.p`
	width: 400px;
	color: #000000;
`;

export const Button = styled.a`
	display: block;
	width: 200px;
	padding: 10px 20px;
	margin: 50px 0 0 0;
	font-size: 20px;
	text-align: center;
	text-decoration: none;
	color: #1b1b1b;
	border: 2px solid #1b1b1b;
	border-radius: 24px;

	:hover {
		color: #ffffff;
		background-color: #1b1b1b;
	}
`;

export const ProductPrice = styled.p`
	display: block;
	width: 200px;
	margin: 0 auto;
	padding: 20px;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: #000000;
`;

export const ProductImg = styled.img`
	display: block;
	width: 300px;
	height: 300px;
	margin: 20px 45px 0;
`;

const InfoProduct = ({ products }) => {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	const currentProduct = products.filter(product => product.id === match.params.id);
	const [product] = currentProduct;

	const getProductId = evt => {
		dispatch(actions.addProduct(evt.target.id));
	};

	return (
		<Product>
			<div>
				<ProductImg src={product.image} alt={product.id} />
				<ProductPrice>{`Price: ${product.price}$`}</ProductPrice>
			</div>
			<div>
				<ProductTitle>{product.title}</ProductTitle>
				<ProductDescription>{product.description}</ProductDescription>
				<Button id={product.id} onClick={getProductId} href='#'>
					Add to Cart
				</Button>
			</div>
		</Product>
	);
};

export default InfoProduct;
