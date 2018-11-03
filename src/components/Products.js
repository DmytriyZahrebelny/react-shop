import React from 'react';
import { Route } from 'react-router-dom';
import { ListProduct, ItemProduct, LinkProduct } from '../style/adminStyle';
import Change from './ChangeProduct';

const Products = ({ products, createNewData }) => {
  const product = products.map((product) => {
    return (
      <ItemProduct key={product.id}>
        <LinkProduct to={`/admin/change/${product.id}`}>{product.title}</LinkProduct>
        <Route path={`/admin/change/${product.id}`}
          render={
            () => <Change createNewData={createNewData} product={product} />
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
