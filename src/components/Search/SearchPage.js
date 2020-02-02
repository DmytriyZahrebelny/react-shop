import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchProducts from './SearchProducts/SearchProducts';
import InfoProduct from '../components/InfoProduct';

const SearchPage = () => {
	const products = useSelector(state => state.productsStore);

	return (
		<div>
			<Switch>
				<Route exact path='/search' component={SearchProducts} />
				<Route path='/search/:id' render={() => <InfoProduct products={products} />} />
			</Switch>
		</div>
	);
};

export default SearchPage;
