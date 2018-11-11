import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ListProducts, ItemProduct, LinkProduct } from '../style/AdminStyle/ChangeProductStyle';
import ChangeProductForm from './ChangeProductForm';
import * as actions from '../modules/Admin/adminActions';

const ChangeProduct = ({ products }) => {
  const product = products.map((product) => {
    return (
      <ItemProduct key={product.id}>
        <LinkProduct to={`/admin/change/${product.id}`}>{product.title}</LinkProduct>
        <Route path={`/admin/change/${product.id}`}
          render={
            () => <ChangeProductForm product={product} />
          }
        />
      </ItemProduct>
    );
  })

  return (
    <div>
      <ListProducts>
        {product}
      </ListProducts>
    </div>
  )
}

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { changeData: actions.changeProduct })(ChangeProduct);
