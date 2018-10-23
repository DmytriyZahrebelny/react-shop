import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Product from './ProductForm';

const ListProduct = styled.ul`
  position: relative;
  list-style: none;
`;

const ItemProduct = styled.li`
  padding: 10px;
`

const LinkProduct = styled(Link)`
  font-size: 16px;
  color: black;

  :visit {
    color: black;
  }
 }
`

const Products = ({ products, createNewData }) => {
  const product = products.map((product) => {
    return (
      <ItemProduct key={product.id}>
        <LinkProduct to={`/admin/${product.id}`}>{product.title}</LinkProduct>
        <Route path={`/admin/${product.id}`} 
          render={
            () => <Product createNewData={createNewData} product={product}></Product>
          }
        />
      </ItemProduct>
    );
  })

  return (
    <div>
      <ListProduct>
        {product}
      </ListProduct>
    </div>
  )
}

export default Products;
