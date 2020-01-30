import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Shop from './views/Shop';
import { fetchProducts } from './stores/Products/productsOperations';

const AppContainer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.productsReducer.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<AppContainer className='App'>
			<Header />
			<Shop />
		</AppContainer>
	);
};

export default App;
