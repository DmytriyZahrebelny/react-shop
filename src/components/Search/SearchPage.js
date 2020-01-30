import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import * as actions from '../../modules/Cart/cartActions';
import SearchProducts from './SearchProducts';
// import InfoProduct from '../Shop/InfoProduct';

const SearchPage = () => {
	return (
		<div>
			<Switch>
				<Route component={SearchProducts} />
				{/* <Route
					path='/search/:id'
					render={match => <InfoProduct url={match} products={products} addProduct={addProduct} />}
				/> */}
			</Switch>
		</div>
	);
};

export default SearchPage;
