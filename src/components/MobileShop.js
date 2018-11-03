import React from 'react';
import { MobilePlace, ProductLink, ProductName, ProductPrice } from '../style/shopStyle'

const mobileShop = ({ products, match : { match } }) => {
  const productsCard = products.map((product) => {
    return (
      <li key={product.title}>
        <ProductLink to={`${match.url}/${product.id}`} >
          <img src={product.image} alt={product.id} />
          <ProductName>{product.title}</ProductName>
          <ProductPrice>{product.price + '$'}</ProductPrice>
        </ProductLink>
      </li>
    )
  })

  return (
    <MobilePlace>
      {productsCard}
    </MobilePlace>
  );
}

export default mobileShop;
