import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as productsOperations from '../modules/Products/productsOperations';
import AdminPage from './AdminPage';
import ShopMenu from '../components/Shop/ShopMenu';
import TabletProducts from '../components/Shop/TabletProducts';
import DesktopProducts from '../components/Shop/DesktopProducts';
import MobilePage from '../components/Shop/MobilePage';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <h1>Loadding...</h1>
    }

    return (
      <Switch>
        <Route exact path="/" component={ShopMenu} />
        <Route path="/admin" component={AdminPage} />
        <Route path='/mobile' component={MobilePage} />
        <Route path='/tablet' component={TabletProducts} />
        <Route path='/desktop' component={DesktopProducts} />
      </Switch>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(connect(mapStateToProps, { fetchProducts: productsOperations.fetchProducts, })(ShopPage));
