import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as actions from '../../modules/Cart/cartActions';
import MobileProducts from './MobileProducts';
import InfoProduct from './InfoProduct';

const shopPage = ({ products, addProduct }) => (
  <Switch>
    <Route exact path="/mobile" render={(match) => <MobileProducts url={match} products={products} addProduct={addProduct} />} />
    <Route path="/mobile/:id" render={(match) => <InfoProduct url={match} products={products} addProduct={addProduct} />} />
  </Switch>
);

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {
  addProduct: actions.addProduct,
})(shopPage);