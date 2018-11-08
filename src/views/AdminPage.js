import React from 'react';
import { Route } from 'react-router-dom';
import { AdminLinks, AdminMenu, AdminContaine, Header, HeaderLink, HeaderNav } from '../style/adminStyle';
import ChangeProduct from '../components/ChangeProduct';
import NewProduct from '../components/NewProduct';
import DeleteProduct from '../components/DeleteProduct';

const AdminPage = ({ changeData, createProduct, deleteProduct, products }) => {
  return (
    <div>
      <Header>
        <HeaderNav>
          <li>
            <HeaderLink to="/admin">Admin</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/shop">Shop</HeaderLink>
          </li>
        </HeaderNav>
      </Header>
      <AdminContaine>
      <AdminMenu>
        <AdminLinks to="/admin/change">Change parameters and descriptions</AdminLinks>
        <AdminLinks to="/admin/add">Add new product</AdminLinks>
        <AdminLinks to="/admin/delete">Delete product</AdminLinks>
      </AdminMenu>
      <div>
        <Route path="/admin/change" component={ChangeProduct} />
        <Route path="/admin/add" component={NewProduct} />
        <Route path="/admin/delete" component={DeleteProduct}/>
      </div>
    </AdminContaine>
    </div>
  )
}

export default AdminPage;