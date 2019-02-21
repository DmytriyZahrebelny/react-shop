import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { array, func, shape } from 'prop-types';
import { AdminContainer } from '../style/AdminStyle/AdminPageStyle';
import ChangeProduct from '../components/Admin/ChangeProduct';
import AddProduct from '../components/Admin/AddProduct';
import DeleteProduct from '../components/Admin/DeleteProduct';
import * as adminOperation from '../modules/Admin/adminOperations';
import * as actions from '../modules/Admin/adminActions';

class Admin extends Component {
  state = {
    type: null,
  }

  componentDidMount() {
    const { isAdmin } = this.props;
    isAdmin(true);
  }

  getRadioButtonValue = (value) => {
    this.setState({
      type: value,
    });
  }

  addProductsSubmit = (values) => {
    const { fetchPostProducts } = this.props;

    fetchPostProducts(values, this.state)
  };

  deleteProductsSubmit = (values) => {
    const { fetchDeleteProducts } = this.props;

    fetchDeleteProducts(values);
  };

  render() {
    const { products : { products } } = this.props;

    return (
      <AdminContainer>
        <Route path="/admin/change"
          render={
            () => <ChangeProduct products={products} />
          }
        />
        <Route path="/admin/add"
          render={
            () => <AddProduct onSubmit={this.addProductsSubmit} getRadioButtonValue={this.getRadioButtonValue} />
          }
        />
        <Route path="/admin/delete"
          render={
            () => <DeleteProduct onSubmit={this.deleteProductsSubmit} products={products} />
          }
        />
      </AdminContainer>
    )
  }
};

Admin.propTypes = {
  isAdmin: func.isRequired,
  products: shape({
    products: array.isRequired
  }),
};

const mapStateToProps = state => {
  return {
    products: state.productsReducer,
    router: state.router,
  }
};

export default connect(mapStateToProps, {
  isAdmin: actions.isAdmin,
  fetchDeleteProducts: adminOperation.fetchDeleteProducts,
  fetchPostProducts: adminOperation.fetchPostProducts,
})(Admin);