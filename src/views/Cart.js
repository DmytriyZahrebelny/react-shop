import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartContainer, ListProducts } from '../style/CartStyle/CartStyle';
import Products from '../components/Cart/Product';
import Sidebar from '../components/Cart/Sidebar';

class Cart extends Component {
  render() {
    const { products : { products }, selectedProduct : { productsId } } = this.props;

    const quantityProducts = productsId.reduce((acc, id) => {
      acc[id] = acc[id] ? acc[id] + 1 : 1;
      return acc;
    }, {});

    const allPrice = products.reduce((sum, product) => {
      if (quantityProducts[product.id]) {
        return sum + quantityProducts[product.id] * product.price;
      }
      return sum;
    }, 0);

    return (
        <form action="#">
          <CartContainer>
            <ListProducts>
              {Object.keys(quantityProducts).map(id => products.filter(product => product.id === id))
                .reduce((acc, arr) => [...acc, ...arr], [])
                .map(product => <Products key={product.id} product={product} quantityProducts={quantityProducts} />)}
            </ListProducts>
            <Sidebar allPrice={allPrice} />
          </CartContainer>
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer,
    selectedProduct: state.cartReducer,
  }
};

export default connect(mapStateToProps)(Cart);
