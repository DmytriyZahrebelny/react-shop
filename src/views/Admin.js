import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { array, func } from 'prop-types';
import { AdminContainer } from '../style/AdminStyle/AdminPageStyle';
import ChangeProduct from '../components/Admin/ChangeProduct';
import AddProduct from '../components/Admin/AddProduct';
import DeleteProduct from '../components/Admin/DeleteProduct';
import * as actions from '../modules/Admin/adminActions';

class Admin extends Component {
  componentDidMount() {
    const { isAdmin } = this.props;
    isAdmin(true);
  }

  render() {
    const { products } = this.props;

    return (
      <AdminContainer>
        <Route path="/admin/change"
          render={
            () => <ChangeProduct products={products} />
          }
        />
        <Route path="/admin/add" component={AddProduct} />
        <Route path="/admin/delete"
          render={
            () => <DeleteProduct products={products} />
          }
        />
      </AdminContainer>
    )
  }
};

Admin.propTypes = {
  isAdmin: func.isRequired,
  products: array.isRequired,
};

const mapStateToProps = state => state.productsReducer;

export default connect(mapStateToProps, { isAdmin: actions.isAdmin })(Admin);