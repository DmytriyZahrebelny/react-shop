import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../../stores/Cart/cartActions';
import MobileProducts from './MobileProducts';
import InfoProduct from './InfoProduct';

const ShopPage = () => {
	const products = useSelector(state => state.productsStore);
	const addProduct = useDispatch(actions.addProduct());

	return (
		<Switch>
			<Route exact path='/mobile' render={() => <MobileProducts products={products} addProduct={addProduct} />} />
			<Route path='/mobile/:id' render={() => <InfoProduct products={products} addProduct={addProduct} />} />
		</Switch>
	);
};

export default ShopPage;
