import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as actions from '../../modules/Cart/cartActions';
import SearchProducts from './SearchProducts';
import InfoProduct from '../Shop/InfoProduct';
import NothingFound from './NothingFound';

const isSearched = searchTerm => {
  return item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

const searchPage = ({ addProduct, headerReducer : { searchProductsWords }, productsReduser : { products } }) => {
  const searchProduct = products.filter(isSearched(searchProductsWords));

  if (searchProduct.length === 0) {
    return <NothingFound />
  }

  return (
    <Switch>
      <Route exact path="/search" render={(match) => <SearchProducts url={match} searchProduct={searchProduct} addProduct={addProduct} />} />
      <Route path="/search/:id" render={(match) => <InfoProduct url={match} products={products} addProduct={addProduct} />} />
    </Switch>
)};

const mapStateToProps = state => {
  return {
    headerReducer: state.headerReducer,
    productsReduser: state.productsReducer,
  }
};

export default connect(mapStateToProps, {
  addProduct: actions.addProduct,
})(searchPage);