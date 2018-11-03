import React from 'react';
import { Route } from 'react-router-dom';
import { AdminLinks, AdminMenu, AdminContaine, Header, HeaderLink, HeaderNav } from '../style/adminStyle';
import Products from '../components/Products';
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
        <Route path="/admin/change"
          render={
            () => <Products changeData={changeData} products={products} />
          }
        />
        <Route path="/admin/add"
          render={
            () => <NewProduct createProduct={createProduct} products={products} />
          }
        />
        <Route path="/admin/delete"
          render={
            () => <DeleteProduct deleteProduct={deleteProduct} products={products} />
          }
        />
      </div>
    </AdminContaine>
    </div>
  )
}

export default AdminPage;