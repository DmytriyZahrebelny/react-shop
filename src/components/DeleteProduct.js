import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListProduct, LinkProduct, Product, DeleteElement } from '../style/AdminStyle/DeleteProductsStyle';
import * as actions from '../modules/Admin/adminActions';

class DeleteProducts extends Component {
  constructor(props) {
    super(props);

    this.deleteElement = this.deleteElement.bind(this);
  }

  deleteElement(evt) {
    const { products, deleteProduct } = this.props;

    const newState = products.filter(product => {
      return product.id !== evt.target.id;
    })

    deleteProduct(newState);
  }

  render() {
    const { products } = this.props;
    const product = products.map((product) => {
      return (
        <Product key={product.id}>
          <LinkProduct to="#">{product.title}</LinkProduct>
          <DeleteElement onClick={this.deleteElement} id={product.id}>X</DeleteElement>
        </Product>
      );
    })

    return (
      <ListProduct>
        {product}
      </ListProduct>
    )
  }
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { deleteProduct: actions.deleteProduct })(DeleteProducts);
