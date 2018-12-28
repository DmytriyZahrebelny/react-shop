import React from 'react';
import { AdminMenuLinks, AdminMenuContainer } from '../../style/AdminStyle/AdminMenuStyle';

const AdminMenu = () => {
  return (
    <AdminMenuContainer>
      <AdminMenuLinks to="/admin/change">Change parameters and descriptions</AdminMenuLinks>
      <AdminMenuLinks to="/admin/add">Add new product</AdminMenuLinks>
      <AdminMenuLinks to="/admin/delete">Delete product</AdminMenuLinks>
    </AdminMenuContainer>
  );
};

export default AdminMenu;