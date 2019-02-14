import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { array, func, shape } from 'prop-types';
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

  submit = (values) => {
    console.log(values)
    fetch('http://localhost:3001/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
  };

  deleteSubmit = (values) => {
    console.log(values);
    // fetch('http://localhost:3001/delete', {
    //   method: 'DELETE',
    //;
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
            () => <AddProduct onSubmit={this.submit} />
          }
        />
        <Route path="/admin/delete"
          render={
            () => <DeleteProduct onSubmit={this.deleteSubmit} products={products} />
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

export default connect(mapStateToProps, { isAdmin: actions.isAdmin })(Admin);