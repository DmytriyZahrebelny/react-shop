import React from 'react';
import { shape, bool } from 'prop-types';
import { AdminMenuLinks, AdminMenuContainer } from '../../style/HeaderStyle/AdminMenuStyle';

const AdminMenu = ({ adminReducer: {isAdmin} }) => {
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

export default AdminMenu;
