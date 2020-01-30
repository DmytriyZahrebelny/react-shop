import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchPage from './components/Search/SearchPage';
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
			<Switch>
				<Route path='/search' component={SearchPage} />
			</Switch>
		</AppContainer>
	);
};

export default App;
