import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './Admin';
import Cart from './Cart';
import ShopMenu from '../components/Shop/ShopMenu';
import TabletProducts from '../components/Shop/TabletProducts';
import DesktopProducts from '../components/Shop/DesktopProducts';
import ShopPage from '../components/Shop/ShopPage';
import SearchPage from '../components/Search/SearchPage';
import AuthPage from '../components/Auth/AuthPage';

const shop = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ShopMenu} />
      <Route path="/admin" component={Admin} />
      <Route path="/cart" component={Cart} />
      <Route path="/mobile" component={ShopPage} />
      <Route path="/tablet" component={TabletProducts} />
      <Route path="/desktop" component={DesktopProducts} />
      <Route path="/search" component={SearchPage} />
      <Route path="/auth" component={AuthPage} />
    </Switch>
  </div>
);

export default shop;
