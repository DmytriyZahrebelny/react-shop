import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { array } from 'prop-types';
import { ListProducts, ItemProduct, ProductName, ProductImg, ChangeProductInput } from '../../style/AdminStyle/ChangeProductStyle';
import ChangeProductForm from './ChangeProductForm';
import * as adminOperations from '../../modules/Admin/adminOperations';

class ChangeProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    }
  }

  changeProductsSubmit = (values) => {
    const { fetchPatchProducts } = this.props;

    fetchPatchProducts(values, this.state)
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
  fetchPatchProducts: adminOperations.fetchPatchProducts,
})(ChangeProduct);
