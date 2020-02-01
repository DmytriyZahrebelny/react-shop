import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Products from './Product';
import Sidebar from './Sidebar';

const CartContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1160px;
	min-height: 800px;
	margin: 10px auto 0;
	padding: 20px;
	background-color: #ffffff;
`;

const ListProducts = styled.ul`
	margin: 0;
	padding: 0;
`;

const Cart = () => {
	const { products, selectedProduct } = useSelector(state => ({
		products: state.productsReducer,
		selectedProduct: state.cartReducer,
	}));

	const quantityProducts = selectedProduct.productsId.reduce((acc, id) => {
		acc[id] = acc[id] ? acc[id] + 1 : 1;
		return acc;
	}, {});

	const allPrice = products.products.reduce((sum, product) => {
		if (quantityProducts[product.id]) {
			return sum + quantityProducts[product.id] * product.price;
		}
		return sum;
	}, 0);

	return (
		<form onSubmit={evt => evt.preventDefault()} action='#'>
			<CartContainer>
				<ListProducts>
					{Object.keys(quantityProducts)
						.map(id => products.products.filter(product => product.id === id))
						.reduce((acc, arr) => [...acc, ...arr], [])
						.map(product => (
							<Products key={product.id} product={product} quantityProducts={quantityProducts} />
						))}
				</ListProducts>
				<Sidebar allPrice={allPrice} />
			</CartContainer>
		</form>
	);
};

export default Cart;
