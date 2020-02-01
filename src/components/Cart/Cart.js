import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Products from './Products/Product';
import Sidebar from './Sidebar/Sidebar';
import { useCartHooks } from './useCartHooks';

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
	const { quantityProducts, allPrice, products } = useCartHooks();

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
