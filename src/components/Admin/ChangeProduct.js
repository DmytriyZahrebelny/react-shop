import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ListProducts, ItemProduct, LinkProduct } from '../../style/AdminStyle/ChangeProductStyle';
import ChangeProductForm from './ChangeProductForm';

const ChangeProduct = ({ products }) => {
  const product = products.map((product) => {
    return (
      <ItemProduct key={product.id}>
        <LinkProduct to={`/admin/change/${product.id}`}>{product.title}</LinkProduct>
      </ItemProduct>
    );
  })

  return (
    <div>
      <ListProducts>
        {product}
      </ListProducts>
      <Route path={`/admin/change/:id`} component={ChangeProductForm} />
    </div>
  )
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps)(ChangeProduct);
