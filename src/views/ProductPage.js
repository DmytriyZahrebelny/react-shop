import React from 'react';
import { ProductInfo, ProductTitle, ProductDescription, ProductButton, ProductPrice } from '../style/shopStyle';

const productPage = ({ products, match }) => {
  const idProduct = match.location.pathname.slice(match.location.pathname.lastIndexOf('/') + 1);

  const currentProduct = products.filter((p) => {
    return p.id === idProduct;
  })

  return (
    <ProductInfo>
      <div>
        <img src={currentProduct[0].image} alt={currentProduct[0].id} />
        <ProductPrice>
          {`Price:${currentProduct[0].price}$`}
        </ProductPrice>
      </div>
      <div>
        <ProductTitle>
          {currentProduct[0].title}
        </ProductTitle>
        <ProductDescription>
          {currentProduct[0].description}
        </ProductDescription>
        <ProductButton to='#'>Add to Cart</ProductButton>
      </div>
    </ProductInfo>
  );
}

export default productPage;
