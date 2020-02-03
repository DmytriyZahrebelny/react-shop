import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ShopMenu from './components/MainMenu/ShopMenu';
import ProductsPage from './components/Products/ProductsPage';
import SearchPage from './components/Search/SearchPage';
import { getProducts } from './stores/Products/productsStore';

const AppContainer = styled.div`
	font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<AppContainer className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={ShopMenu} />
				<Route path={['/mobile', '/tablet', '/desktop']} component={ProductsPage} />
				<Route path='/search' component={SearchPage} />
				<Route path='/cart' component={Cart} />
			</Switch>
		</AppContainer>
	);
};

export default App;
