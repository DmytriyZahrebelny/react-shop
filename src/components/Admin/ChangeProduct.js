import React from 'react';
import { Route } from 'react-router-dom';
import { ListProducts, ItemProduct, ProductName, ProductImg, ChangeProductInput } from '../../style/AdminStyle/ChangeProductStyle';
import ChangeProductForm from './ChangeProductForm';

const ChangeProduct = ({ products }) => {
  return (
    <div>
      <ListProducts>
        {
          products.map((product) => {
            return (
              <ItemProduct key={product.id}>
                <ProductImg src={product.image} alt='img' />
                <ProductName>{product.title}</ProductName>
                <ChangeProductInput to={`/admin/change/${product.id}`}>Change Product</ChangeProductInput>
              </ItemProduct>
            );
          })
        }
      </ListProducts>
      <Route path={`/admin/change/:id`}
        render={
          (match) => <ChangeProductForm match={match} products={products} />
        }
      />
    </div>
  )
}

export default ChangeProduct;
