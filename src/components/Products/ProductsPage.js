import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Products from './Products/Products';
import InfoProduct from '../components/InfoProduct';

const ShopPage = () => {
	const products = useSelector(state => state.productsStore);

	return (
		<Switch>
			<Route exact path='/mobile' render={() => <Products products={products} />} />
			<Route path='/mobile/:id' render={() => <InfoProduct products={products} />} />
			<Route exact path='/tablet' render={() => <Products products={products} />} />
			<Route path='/tablet/:id' render={() => <InfoProduct products={products} />} />
			<Route exact path='/desktop' render={() => <Products products={products} />} />
			<Route path='/desktop/:id' render={() => <InfoProduct products={products} />} />
		</Switch>
	);
};

export default ShopPage;
