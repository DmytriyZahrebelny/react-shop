import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Cart extends Component {
	render() {
		const {
			products: { products },
			selectedProduct: { productsId },
		} = this.props;

		const quantityProducts = productsId.reduce((acc, id) => {
			acc[id] = acc[id] ? acc[id] + 1 : 1;
			return acc;
		}, {});

		const allPrice = products.reduce((sum, product) => {
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
							.map(id => products.filter(product => product.id === id))
							.reduce((acc, arr) => [...acc, ...arr], [])
							.map(product => (
								<Products key={product.id} product={product} quantityProducts={quantityProducts} />
							))}
					</ListProducts>
					<Sidebar allPrice={allPrice} />
				</CartContainer>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.productsReducer,
		selectedProduct: state.cartReducer,
	};
};

export default connect(mapStateToProps)(Cart);
