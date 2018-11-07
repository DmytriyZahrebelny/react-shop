import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductItem, ProductImg, ProductDescriptions, ProductPrice } from '../style/cartStyle';
import * as actions from '../modules/Cart/cartActions';

class BasketPage extends Component {
  componentDidMount() {
    const { products, addState } = this.props;

    addState(products);
  }

  render() {
    const { products, addedProductId, addState } = this.props;
    const addedProducts = addedProductId ? addedProductId : [];
  
    const listAddedProducts = addedProducts.map(id => {
      return (
        <ProductItem key={getProduct(id)[0].id}>
          <ProductImg src={getProduct(id)[0].image} alt={getProduct(id)[0].title} />
          <ProductPrice>${getProduct(id)[0].price}</ProductPrice>
          <ProductDescriptions>{getProduct(id)[0].title}</ProductDescriptions>
        </ProductItem>
      );
    });

    function getProduct(id) {
      return products.filter((p, i) => {
        return p.id === id;
      })
    }

    return (
      <ul>
        {listAddedProducts}
      </ul>
    )
  }
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps, { addState: actions.addState })(BasketPage);