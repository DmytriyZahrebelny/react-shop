import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { array } from 'prop-types';
import { ListProducts, ItemProduct, ProductName, ProductImg, ChangeProductInput } from '../../style/AdminStyle/ChangeProductStyle';
import ChangeProductForm from './ChangeProductForm';
import * as actions from '../../modules/Products/productsActions';

class ChangeProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    }
  }

  changeProductsSubmit = (values) => {
    const { fetchProducts } = this.props;

    fetch('http://localhost:3001/change', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(Object.assign(values, this.state)),
    })
    .then(products => products.json())
    .then(products => fetchProducts(products));
  }

  getProductId = (id) => {
    this.setState({
      id,
    })
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <ListProducts>
          {
            products.map((product) => {
              return (
                <ItemProduct key={product.id}>
                  <ProductImg src={product.image} alt='img' />
                  <ProductName>{product.title}</ProductName>
                  <ChangeProductInput to={`/admin/change/${product.id}`}>Change Product</ChangeProductInput>
                </ItemProduct>
              );
            })
          }
        </ListProducts>
        <Route path={`/admin/change/:id`}
          render={
            () => <ChangeProductForm getProductId={this.getProductId} onSubmit={this.changeProductsSubmit} />
          } />
      </div>
    )
  }
}

ChangeProduct.propTypes = {
  products: array.isRequired,
};

export default connect(null, {
  fetchProducts: actions.fetchProducts,
})(ChangeProduct);
