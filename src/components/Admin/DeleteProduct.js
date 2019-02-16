import React from 'react';
import { array } from 'prop-types';
import {reduxForm} from 'redux-form';
import { ListProduct, DeleteElement } from '../../style/AdminStyle/DeleteProductsStyle';
import { ItemProduct, ProductName, ProductImg } from '../../style/AdminStyle/ChangeProductStyle';

const DeleteProducts = ({ products, handleSubmit, onSubmit }) => {
  return (
    <ListProduct>
      <form onSubmit={handleSubmit}>
        {
          products.map((product) => {
            return (
              <ItemProduct key={product.id}>
                <ProductImg src={product.image} alt='img' />
                <ProductName>{product.title}</ProductName>
                <DeleteElement type="submit"
                  onClick={handleSubmit(() => onSubmit(product.id))
                }>Delete Element</DeleteElement>
              </ItemProduct>
            );
          })
        }
      </form>
    </ListProduct>
  )
}

DeleteProducts.propTypes = {
  products: array.isRequired,
};

export default reduxForm({
  form: 'delete',
})(DeleteProducts);
