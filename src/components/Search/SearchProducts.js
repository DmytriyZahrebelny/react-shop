import React, { Component } from 'react';
import { ProductsList, ProductItem,Button } from '../../style/ShopStyle/MobileProductsStyle';
import ProductLink from '../Shop/ProductLink';

class SearchProducts extends Component {
  constructor(props) {
    super(props);

    this.getProductId = this.getProductId.bind(this);
  }

  getProductId(evt) {
    const { addProduct } = this.props;

    addProduct(evt.target.id);
  }

  render() {
    const { searchProduct, url : { match } } = this.props;

    return (
      <ProductsList>
        {searchProduct.map((product) => (
          <ProductItem key={product.title}>
            <ProductLink match={match} product={product} />
            <Button onClick={this.getProductId} id={product.id}>Add to Cart</Button>
          </ProductItem>)
        )}
      </ProductsList>
    );
  }
};

export default SearchProducts;