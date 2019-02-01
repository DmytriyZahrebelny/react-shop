import React from 'react';
import ShopMenu from './ShopMenu';
import { HeaderMenu, AuthLink } from '../../style/HeaderStyle/HeaderMenuStyle';
import AdminMenu from './AdminMenu';

const headerMenu = () => (
  <HeaderMenu>
    <ShopMenu />
    <AdminMenu />
    <AuthLink to='/auth'>Login</AuthLink>
  </HeaderMenu>
);

export default headerMenu;
