import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import * as productsOperations from './stores/Products/productsOperations';

const AppContainer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`;

class App extends Component {
	componentDidMount() {
		const { fetchProducts } = this.props;
		fetchProducts();
	}

	render() {
		const { products } = this.props;
		console.log(products);
		if (products.length === 0) {
			return null;
		}

		return (
			<AppContainer className='App'>
				<Header />
			</AppContainer>
		);
	}
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {
	fetchProducts: productsOperations.fetchProducts,
})(App);
