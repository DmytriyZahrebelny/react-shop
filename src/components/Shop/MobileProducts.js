import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductsList, ProductLink, ProductName, Button, ProductImg } from '../../style/ShopStyle/MobileProductsStyle'
import * as actions from '../../modules/Cart/cartActions';

class MobileProducts extends Component {
  constructor(props) {
    super(props)

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(evt) {
    const { addProductId } = this.props;

    addProductId(evt.target.id);
  }

  render() {
    const { products, match } = this.props;

    const productsCard = products.map((product) => {
      return (
        <li key={product.title}>
          <ProductLink to={`${match.url}/${product.id}`} >
            <ProductImg src={product.image} alt={product.id} />
            <ProductName>{product.title}</ProductName>
          </ProductLink>
          <Button onClick={this.addProduct} id={product.id}>Add to Cart</Button>
        </li>
      )
    })

    return (
      <ProductsList>
        {productsCard}
      </ProductsList>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {addProductId: actions.addProduct})(MobileProducts);
