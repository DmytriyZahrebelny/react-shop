import React from 'react';
import { Product, ProductImg, ProductDescriptions, ProductPrice } from '../../style/ShopStyle/CartStyle';

const product = ({ product, quantityProducts }) => (
  <Product>
    <ProductImg src={product.image} alt={product.title} />
    <ProductPrice>${product.price}</ProductPrice>
    <div>{quantityProducts[product.id]}</div>
    <ProductDescriptions>{product.title}</ProductDescriptions>
  </Product>
);

export default product;
