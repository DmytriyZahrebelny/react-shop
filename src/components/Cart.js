import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product, ProductImg, ProductDescriptions, ProductPrice } from '../style/ShopStyle/CartStyle';
import * as actions from '../modules/Cart/cartActions';

class Cart extends Component {
  componentDidMount() {
    const { currenState : { products }, addState } = this.props;

    addState(products);
  }

  render() {
    const { selectedProduct : { allProducts, addedProductId } } = this.props;

    if (allProducts.length === 0) {
      return <h1>Loadding...</h1>
    }

    const listAddedProducts = addedProductId.map(id => {
      return (
        <Product key={getProduct(id)[0].id}>
          <ProductImg src={getProduct(id)[0].image} alt={getProduct(id)[0].title} />
          <ProductPrice>${getProduct(id)[0].price}</ProductPrice>
          <ProductDescriptions>{getProduct(id)[0].title}</ProductDescriptions>
        </Product>
      );
    });

    function getProduct(id) {
      return allProducts.filter((product, i) => {
        return product.id === id;
      })
    }

    return (
      <ul>
        {listAddedProducts}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    currenState: state.productsReducer,
    selectedProduct: state.cartReducer,
  }
};

export default connect(mapStateToProps, { addState: actions.addState })(Cart);