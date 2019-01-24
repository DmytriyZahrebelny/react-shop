import React from 'react';
import { ListProduct, DeleteElement } from '../../style/AdminStyle/DeleteProductsStyle';
import { ItemProduct, ProductName, ProductImg } from '../../style/AdminStyle/ChangeProductStyle';

const DeleteProducts = ({ products }) => {
  return (
    <ListProduct>
      {
        products.map((product) => {
          return (
            <ItemProduct key={product.id}>
              <ProductImg src={product.image} alt='img' />
              <ProductName>{product.title}</ProductName>
              <DeleteElement id={product.id}>Delete Element</DeleteElement>
            </ItemProduct>
          );
        })
      }
    </ListProduct>
  )
}

export default DeleteProducts;
