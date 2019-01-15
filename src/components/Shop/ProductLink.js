import React from 'react';
import { ProductLink, ProductName, ProductImg } from '../../style/ShopStyle/MobileProductsStyle';

function productLink({ match, product }) {
  return (
    <ProductLink to={`${match.url}/${product.id}`} >
      <ProductImg src={product.image} alt={product.id} />
      <ProductName>{product.title}</ProductName>
    </ProductLink>
  );
}

export default productLink;