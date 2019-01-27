import React from 'react';
import { array } from 'prop-types';
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

DeleteProducts.propTypes = {
  products: array.isRequired,
};

export default DeleteProducts;
