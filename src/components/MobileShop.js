import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MobilePlace, ProductLink, ProductName, ProductButtonContiner, ProductImg } from '../style/shopStyle'
import * as actions from '../modules/Cart/cartActions';

class MobileShop extends Component {
  constructor(props) {
    super(props)

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(evt) {
    const { addProductId } = this.props;

    addProductId(evt.target.id);
  }

  render() {
    const { products, match : { match } } = this.props;

    const productsCard = products.map((product) => {
      return (
        <li key={product.title}>
          <ProductLink to={`${match.url}/${product.id}`} >
            <ProductImg src={product.image} alt={product.id} />
            <ProductName>{product.title}</ProductName>
          </ProductLink>
          <ProductButtonContiner onClick={this.addProduct} id={product.id}>Add to Cart</ProductButtonContiner>
        </li>
      )
    })

    return (
      <MobilePlace>
        {productsCard}
      </MobilePlace>
    );
  }
}

export default connect(null, {addProductId: actions.addProduct})(MobileShop);
