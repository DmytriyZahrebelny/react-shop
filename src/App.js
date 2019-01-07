import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppContainer } from './style/AppStyle/AppStyle';
import * as productsOperations from './modules/Products/productsOperations';
import AdminPage from './views/AdminPage';
import ShopMenu from '../src/components/Shop/ShopMenu';
import ShopHeader from '../src/components/Shop/ShopHeader';
import TabletProducts from '../src/components/Shop/TabletProducts';
import DesktopProducts from '../src/components/Shop/DesktopProducts';
import MobilePage from './components/Shop/MobilePage';

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
        <ShopHeader />
        <Switch>
          <Route exact path="/" component={ShopMenu} />
          <Route path="/admin" component={AdminPage} />
          <Route path='/mobile' component={MobilePage} />
          <Route path='/tablet' component={TabletProducts} />
          <Route path='/desktop' component={DesktopProducts} />
        </Switch>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(connect(mapStateToProps, { fetchProducts: productsOperations.fetchProducts, })(App));
