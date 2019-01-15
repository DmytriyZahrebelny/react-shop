import React from 'react';
import { Route } from 'react-router-dom';
import { AdminContainer } from '../style/AdminStyle/AdminPageStyle';
import ChangeProduct from '../components/Admin/ChangeProduct';
import AddProduct from '../components/Admin/AddProduct';
import DeleteProduct from '../components/Admin/DeleteProduct';
import AdminMenu from '../components/Admin/AdminMenu';
import AdminHeader from '../components/Admin/AdminHeader';

const Admin = () => {
  return (
    <div>
      <AdminHeader / >
      <AdminContainer>
        <AdminMenu />
        <Route path="/admin/change" component={ChangeProduct} />
        <Route path="/admin/add" component={AddProduct} />
        <Route path="/admin/delete" component={DeleteProduct}/>
      </AdminContainer>
    </div>
  )
}

export default Admin;