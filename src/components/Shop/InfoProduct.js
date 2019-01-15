import React from 'react';
import { Product, ProductTitle, ProductDescription, Button, ProductPrice, ProductImg } from '../../style/ShopStyle/InfoProductStyle';

const infoProduct = ({ products, addProduct, url : { match } }) => {
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

export default infoProduct;
