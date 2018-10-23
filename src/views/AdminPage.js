import React, { Component } from 'react';
import { dataProducts } from '../data/dataProducts';
import Products from '../components/Products';

class AdminPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: dataProducts,
    }

    this.createNewData = this.createNewData.bind(this);
  }

  createNewData(productId, nameField, newParam) {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === productId) {
          product[nameField] = newParam;
        }
        return product;
      })
    });
  };

  render() {
    return (
      <Products createNewData={this.createNewData} products={this.state.products} />
    )
  }
}

export default AdminPage;