import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { array, func } from 'prop-types';
import * as actions from '../../modules/Cart/cartActions';
import MobileProducts from './Products';
import InfoProduct from './InfoProduct';

const shopPage = ({ products, addProduct, match }) => (
  <Switch>
    <Route exact path={`${match.path}`} render={() => <MobileProducts products={products} addProduct={addProduct} />} />
    <Route path={`${match.path}/:id`} render={() => <InfoProduct products={products} addProduct={addProduct} />} />
  </Switch>
);

shopPage.propTypes = {
  products: array.isRequired,
  addProduct: func.isRequired,
};

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {
  addProduct: actions.addProduct,
})(shopPage);