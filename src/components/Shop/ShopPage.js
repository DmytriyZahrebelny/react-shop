import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as productsOperations from '../../modules/Products/productsOperations';
import * as actions from '../../modules/Cart/cartActions';
import MobileProducts from './MobileProducts';
import InfoProduct from './InfoProduct';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, addProduct } = this.props;

    if (products.length === 0) {
      return <h1>Loadding...</h1>
    }

    return (
      <Switch>
        <Route exact path="/mobile" render={(match) => <MobileProducts url={match} products={products} addProduct={addProduct} />} />
        <Route path="/mobile/:id" render={(match) => <InfoProduct url={match} products={products} addProduct={addProduct} />} />
      </Switch>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(connect(mapStateToProps, {
  fetchProducts: productsOperations.fetchProducts,
  addProduct: actions.addProduct,
})(ShopPage));