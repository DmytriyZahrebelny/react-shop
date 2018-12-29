import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product, ProductImg, ProductDescriptions, ProductPrice, CartContainer, ListProducts, AllPrice, ToPayText, Button } from '../../style/ShopStyle/CartStyle';
import * as actions from '../../modules/Cart/cartActions';

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

    const addedProducts = allProducts.filter(p => {
      if (addedProductId.includes(p.id)) {
        return p.id;
      }
    })
    
    const listAddedProducts = addedProducts.map(product => {
      return (
        <Product key={product.id}>
          <ProductImg src={product.image} alt={product.title} />
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDescriptions>{product.title}</ProductDescriptions>
        </Product>
      )
    });

    const allPrice = addedProducts.reduce((sum, currentPrice) => {
      return sum + currentPrice.price;
    }, 0);

    return (
      <CartContainer>
        <ListProducts>
          {listAddedProducts}
        </ListProducts>
        <AllPrice>
          <ToPayText>To pay: ${allPrice}</ToPayText>
          <Button type="submit" value="Buy" />
        </AllPrice>
      </CartContainer>
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
