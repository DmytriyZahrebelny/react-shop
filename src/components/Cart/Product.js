import React from 'react';
import { object, string, number, shape } from 'prop-types';
import { Product, ProductImg, ProductDescriptions, ProductPrice, AmountProduct } from '../../style/CartStyle/CartStyle';

const product = ({ product, quantityProducts }) => (
  <Product>
    <ProductImg src={product.image} alt={product.title} />
    <ProductPrice>${product.price}</ProductPrice>
    <AmountProduct type="text" value={`Added: ${quantityProducts[product.id]}`} disabled />
    <ProductDescriptions>{product.title}</ProductDescriptions>
  </Product>
);

product.propTypes = {
  product: shape({
    image: string.isRequired,
    price: number.isRequired,
    id: string.isRequired,
    title: string,
  }),
  quantityProducts: object.isRequired,
};

export default product;
