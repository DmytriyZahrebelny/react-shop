import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { array, func } from 'prop-types';
import * as actions from '../../modules/Cart/cartActions';
import MobileProducts from './MobileProducts';
import InfoProduct from './InfoProduct';

const shopPage = ({ products, addProduct }) => (
  <div>
    <Switch>
      <Route exact path="/mobile" render={(match) => <MobileProducts url={match} products={products} addProduct={addProduct} />} />
      <Route path="/mobile/:id" render={(match) => <InfoProduct url={match} products={products} addProduct={addProduct} />} />
    </Switch>
  </div>
);

shopPage.propTypes = {
  products: array.isRequired,
  addProduct: func.isRequired,
};

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {
  addProduct: actions.addProduct,
})(shopPage);