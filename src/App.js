import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as productsOperations from "./modules/Products/productsOperations";
import { AppContainer } from "./style/AppStyle/AppStyle";
import Header from "./components/Header/Header";
import Shop from "./views/Shop";
import Loadding from "./components/Shop/Loadding";

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <Loadding />;
    }
    console.log("render");
    return (
      <AppContainer className="App">
        <Header />
        <Shop />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchProducts: productsOperations.fetchProducts
    }
  )(App)
);
