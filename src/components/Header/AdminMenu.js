import React from 'react';
import { connect } from 'react-redux';
import { shape, bool } from 'prop-types';
import { AdminMenuLinks, AdminMenuContainer } from '../../style/HeaderStyle/AdminMenuStyle';

const AdminMenu = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <AdminMenuContainer>
        <AdminMenuLinks to="/admin/change">Change parameters</AdminMenuLinks>
        <AdminMenuLinks to="/admin/add">Add new product</AdminMenuLinks>
        <AdminMenuLinks to="/admin/delete">Delete product</AdminMenuLinks>
      </AdminMenuContainer>
    );
  }

  return null;
};

AdminMenu.propTypes = {
  adminReducer: shape({
    isAdmin: bool.isRequired,
  }),
};

const mapStateToProps = state => state.adminReducer;

export default connect(mapStateToProps)(AdminMenu);
