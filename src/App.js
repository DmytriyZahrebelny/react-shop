import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AppBox } from './style/adminStyle';
import AdminPage from './views/AdminPage';
import ShopPage from './views/ShopPage';
import MainNav from './components/MainNav';
import * as productsOperations from './modules/Products/productsOperations';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeData = this.changeData.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  changeData(productId, nameField, newParam) {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product[nameField] = newParam;
        }
        return product;
      })
    });
  }

  createProduct(product) {
    this.setState({
      products: [...this.state.products, product]
    });
  }

  deleteProduct(newState) {
    this.setState({
      products: [...newState],
    });
  }

  render() {
    const { products } = this.props;

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
                changeData={this.changeData}
                createProduct={this.createProduct}
                deleteProduct={this.deleteProduct}
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

const mapStateToProps = state => state.productsReduser;

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchProducts,
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));
