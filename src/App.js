import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBox } from './style/adminStyle';
import { dataProducts } from './data/dataProducts';
import AdminPage from './views/AdminPage';
import ShopPage from './views/ShopPage';
import MainNav from './components/MainNav';
import * as Api from './api/Api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }

    this.changeData = this.changeData.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async componentDidMount() {
    const products = await Api.AdminProducts.fetchProducts();

    this.setState({
      products,
    });
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
                products={this.state.products}
              />
            }
          />
          <Route path="/shop"
            render={
              (match) => <ShopPage
                products={this.state.products} match={match}
              />
            }
          />
        </Switch>
      </AppBox>
    );
  }
}

export default App;
