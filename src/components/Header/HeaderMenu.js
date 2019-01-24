import React from 'react';
import ShopMenu from './ShopMenu';
import { HeaderMenu, AuthLink } from '../../style/HeaderStyle/HeaderMenuStyle';
import AdminMenu from './AdminMenu';

const headerMenu = (props) => {
  return (
    <HeaderMenu>
      <ShopMenu />
      <AdminMenu {...props} />
      <AuthLink to='/auth'>Login</AuthLink>
    </HeaderMenu>
  )
}

export default headerMenu;
