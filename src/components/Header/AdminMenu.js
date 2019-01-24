import React from 'react';
import { AdminMenuLinks, AdminMenuContainer } from '../../style/AdminStyle/AdminMenuStyle';

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

export default AdminMenu;