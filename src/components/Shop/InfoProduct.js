import React from 'react';
import { withRouter } from 'react-router-dom';
import { array, object, shape, func } from 'prop-types';
import { Product, ProductTitle, ProductDescription, Button, ProductPrice, ProductImg } from '../../style/ShopStyle/InfoProductStyle';

const infoProduct = ({ products, addProduct, match }) => {
  const currentProduct = products.filter((product) => {
    return product.id === match.params.id;
  });

  const [ product ] = currentProduct;

  function getProductId(evt) {
    addProduct(evt.target.id);
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
        <Button id={product.id} onClick={getProductId} href='#'>Add to Cart</Button>
      </div>
    </Product>
  );
}

infoProduct.propTypes = {
  products: array.isRequired,
  addProduct: func.isRequired,
  url: shape({
    match: object.isRequired,
  }),
};

export default withRouter(infoProduct);
