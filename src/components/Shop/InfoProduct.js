import React from 'react';
import { connect } from 'react-redux';
import { Product, ProductTitle, ProductDescription, Button, ProductPrice, ProductImg } from '../../style/ShopStyle/InfoProductStyle';
import * as actions from '../../modules/Cart/cartActions';

const InfoProduct = ({ products, addProductId, match }) => {
  const currentProduct = products.filter((product) => {
    return product.id === match.params.id;
  });

  const [ product ] = currentProduct;

  function addProduct(evt) {
    addProductId(evt.target.id);
  }

  return (
    <Product>
      <div>
        <ProductImg src={product.image} alt={product.id} />
        <ProductPrice>
          {`Price: ${product.price}$`}
        </ProductPrice>
      </div>
      <div>
        <ProductTitle>
          {product.title}
        </ProductTitle>
        <ProductDescription>
          {product.description}
        </ProductDescription>
        <Button id={product.id} onClick={addProduct} href='#'>Add to Cart</Button>
      </div>
    </Product>
  );
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, {addProductId: actions.addProduct})(InfoProduct);
