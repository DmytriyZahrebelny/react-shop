import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './Admin';
import ShopMenu from '../components/Shop/ShopMenu';
import TabletProducts from '../components/Shop/TabletProducts';
import DesktopProducts from '../components/Shop/DesktopProducts';
import ShopPage from '../components/Shop/ShopPage';

function shop() {
  return (
    <Switch>
      <Route exact path="/" component={ShopMenu} />
      <Route path="/admin" component={Admin} />
      <Route path="/mobile" component={ShopPage} />
      <Route path="/tablet" component={TabletProducts} />
      <Route path="/desktop" component={DesktopProducts} />
    </Switch>
  );
}


export default shop;
