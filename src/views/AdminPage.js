import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { dataProducts } from '../data/dataProducts';
import { AdminLinks, AdminMenu, AdminContaine } from '../style/adminSyle';
import Products from '../components/Products';
import NewProduct from '../components/NewProduct';
import DeleteProduct from '../components/DeleteProduct';

class AdminPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: dataProducts,
    }

    this.createNewData = this.createNewData.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
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
      <AdminContaine>
        <AdminMenu>
          <AdminLinks to="/admin/change">Change parameters and descriptions</AdminLinks>
          <AdminLinks to="/admin/add">Add new product</AdminLinks>
          <AdminLinks to="/admin/delete">Delete product</AdminLinks>
        </AdminMenu>
        <div>
          <Route path="/admin/change"
             render={
             () => <Products createNewData={this.createNewData} products={this.state.products} />
            } 
          />
          <Route path="/admin/add"
            render={
            () => <NewProduct createProduct={this.createProduct} products={this.state.products} />
            } 
          />
          <Route path="/admin/delete"
            render={
            () => <DeleteProduct deleteProduct={this.deleteProduct} products={this.state.products} />
            } 
          />
        </div>
      </AdminContaine>
    )
  }
}

export default AdminPage;