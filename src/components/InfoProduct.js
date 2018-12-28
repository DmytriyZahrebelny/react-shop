import React from 'react';
import { connect } from 'react-redux';
import { Product, ProductTitle, ProductDescription, Button, ProductPrice, ProductImg } from '../style/ShopStyle/InfoProductStyle';
import * as actions from '../modules/Cart/cartActions';

const InfoProduct = ({ products, location, addProductId }) => {
  const idProduct = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

  const currentProduct = products.filter((product) => {
    return product.id === idProduct;
  });

  function addProduct(evt) {
    addProductId(evt.target.id);
  }

  return (
    <Product>
      <div>
        <ProductImg src={currentProduct[0].image} alt={currentProduct[0].id} />
        <ProductPrice>
          {`Price: ${currentProduct[0].price}$`}
        </ProductPrice>
      </div>
      <div>
        <ProductTitle>
          {currentProduct[0].title}
        </ProductTitle>
        <ProductDescription>
          {currentProduct[0].description}
        </ProductDescription>
        <Button id={currentProduct[0].id} onClick={addProduct} href='#'>Add to Cart</Button>
      </div>
    </Product>
  );
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {addProductId: actions.addProduct})(InfoProduct);
