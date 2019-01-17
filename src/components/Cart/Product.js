import React from 'react';
import { Product, ProductImg, ProductDescriptions, ProductPrice, AmountProduct } from '../../style/ShopStyle/CartStyle';

const product = ({ product, quantityProducts }) => (
  <Product>
    <ProductImg src={product.image} alt={product.title} />
    <ProductPrice>${product.price}</ProductPrice>
    <AmountProduct type="text" value={`Added: ${quantityProducts[product.id]}`} disabled />
    <ProductDescriptions>{product.title}</ProductDescriptions>
  </Product>
);

export default product;
