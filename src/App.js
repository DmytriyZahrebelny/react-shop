import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ShopMenu from './components/MainMenu/ShopMenu';
import ShopPage from './components/Shop/ShopPage';
import SearchPage from './components/Search/SearchPage';
import { fetchProducts } from './stores/Products/productsOperations';

const AppContainer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.productsStore);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<AppContainer className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={ShopMenu} />
				<Route path={['/mobile', '/tablet', '/desktop']} component={ShopPage} />
				<Route path='/search' component={SearchPage} />
				<Route path='/cart' component={Cart} />
			</Switch>
		</AppContainer>
	);
};

export default App;
