import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { array, string, shape, func } from "prop-types";
import * as actions from "../../modules/Cart/cartActions";
import SearchProducts from "./SearchProducts";
import InfoProduct from "../Shop/InfoProduct";
import NothingFound from "./NothingFound";
import { createSelector } from "reselect";

const isSearched = searchTerm => {
  return item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

const searchPage = ({
  addProduct,
  productsReduser: { products },
  searchProducts
}) => {
  if (searchProducts.length === 0) {
    return <NothingFound />;
  }

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/search"
          render={match => (
            <SearchProducts
              url={match}
              searchProduct={searchProducts}
              addProduct={addProduct}
            />
          )}
        />
        <Route
          path="/search/:id"
          render={match => (
            <InfoProduct
              url={match}
              products={products}
              addProduct={addProduct}
            />
          )}
        />
      </Switch>
    </div>
  );
};

searchPage.propTypes = {
  addProduct: func.isRequired,
  productsReduser: shape({
    products: array.isRequired
  })
};

const searchProductsSelector = createSelector(
  [
    state => state.productsReducer.products,
    state => state.headerReducer.searchProductsWords
  ],
  (products, searchProductsWords) =>
    products.filter(isSearched(searchProductsWords))
);

const mapStateToProps = state => {
  return {
    searchProducts: searchProductsSelector(state),
    productsReduser: state.productsReducer
  };
};

export default connect(
  mapStateToProps,
  {
    addProduct: actions.addProduct
  }
)(searchPage);
