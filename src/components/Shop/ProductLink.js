import React from 'react';
import { ProductLink, ProductName, ProductImg } from '../../style/ShopStyle/MobileProductsStyle';
import { shape, string } from 'prop-types';

const productLink = ({ match, product }) => {
  return(
  <ProductLink to={`${match.url}/${product.id}`} >
    <ProductImg src={product.image} alt={product.id} />
    <ProductName>{product.title}</ProductName>
  </ProductLink>
)};

productLink.propTypes = {
  match: shape({
    url: string.isRequired,
  }),
  product: shape({
    id: string.isRequired,
    image: string.isRequired,
    title: string,
  }),
};

export default productLink;
