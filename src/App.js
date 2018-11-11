import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppContainer } from './style/AppStyle/AppStyle';
import AdminPage from './views/AdminPage';
import ShopPage from './views/ShopPage';
import AdminHeader from './components/AdminHeader';
import * as productsOperations from './modules/Products/productsOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <h1>Loadding...</h1>
    }

    return (
      <AppContainer className="App">
        <Switch>
          <Route exact path="/" component={AdminHeader} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(connect(mapStateToProps, { fetchProducts: productsOperations.fetchProducts, })(App));
