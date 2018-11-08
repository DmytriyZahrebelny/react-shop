import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppBox } from './style/adminStyle';
import AdminPage from './views/AdminPage';
import ShopPage from './views/ShopPage';
import MainNav from './components/MainNav';
import * as productsOperations from './modules/Products/productsOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    if (!products) {
      return <h1>Loadding...</h1>
    }

    if (products.length === 0) {
      return <h1>Loadding...</h1>
    }

    return (
      <AppBox className="App">
        <Switch>
          <Route exact path="/" component={MainNav} />
          <Route path="/admin"
            render={
              () => <AdminPage
                products={products}
              />
            }
          />
          <Route path="/shop"
            render={
              (match) => <ShopPage
                products={products} match={match}
              />
            }
          />
        </Switch>
      </AppBox>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchProducts,
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));
