import React from 'react';
import { Route } from 'react-router-dom';
import { AdminContainer } from '../style/AdminStyle/AdminPageStyle';
import ChangeProduct from '../components/ChangeProduct';
import AddProduct from '../components/AddProduct';
import DeleteProduct from '../components/DeleteProduct';
import AdminMenu from '../components/AdminMenu';
import AdminHeader from '../components/AdminHeader';

const AdminPage = () => {
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

export default AdminPage;