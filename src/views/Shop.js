import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../components/Cart/Cart';

import ShopMenu from '../components/Shop/ShopMenu';
import TabletProducts from '../components/Shop/TabletProducts';
import DesktopProducts from '../components/Shop/DesktopProducts';
import ShopPage from '../components/Shop/ShopPage';
import SearchPage from '../components/Search/SearchPage';

const Shop = () => (
	<Switch>
		<Route exact path='/' component={ShopMenu} />
		<Route path='/mobile' component={ShopPage} />
		<Route path='/tablet' component={TabletProducts} />
		<Route path='/desktop' component={DesktopProducts} />
		<Route path='/search' component={SearchPage} />
		<Route path='/cart' component={Cart} />
	</Switch>
);

export default Shop;
