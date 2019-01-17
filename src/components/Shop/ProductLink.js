import React from 'react';
import { ProductLink, ProductName, ProductImg } from '../../style/ShopStyle/MobileProductsStyle';

const productLink = ({ match, product }) => (
  <ProductLink to={`${match.url}/${product.id}`} >
    <ProductImg src={product.image} alt={product.id} />
    <ProductName>{product.title}</ProductName>
  </ProductLink>
);

export default productLink;
