import React, { Component } from 'react';
import { ListProduct, LinkProduct, ItemProduct, DeleteElement } from '../style/adminStyle';

class DeleteProducts extends Component {
  constructor(props) {
    super(props);

    this.deleteElement = this.deleteElement.bind(this);
  }

  deleteElement(evt) {
    const { products, deleteProduct } = this.props;

    products.splice(evt.target.id - 1, 1);
    products.forEach((element, i) => {
      return element.id = i + 1;
    });

    deleteProduct(products);
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

export default DeleteProducts;
