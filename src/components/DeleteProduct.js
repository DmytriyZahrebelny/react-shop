import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListProduct, LinkProduct, ItemProduct, DeleteElement } from '../style/adminStyle';
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
        <ItemProduct key={product.id}>
          <LinkProduct to="#">{product.title}</LinkProduct>
          <DeleteElement onClick={this.deleteElement} id={product.id}>X</DeleteElement>
        </ItemProduct>
      );
    })

    return (
      <div>
        <ListProduct>
          {product}
        </ListProduct>
    </div>
    )
  }
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { deleteProduct: actions.deleteProduct })(DeleteProducts);
