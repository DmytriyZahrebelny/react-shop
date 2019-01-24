import React from 'react';
import ShopMenu from './ShopMenu';
import { HeaderMenu } from '../../style/HeaderStyle/HeaderMenuStyle';
import AdminMenu from './AdminMenu';

const headerMenu = (props) => {
  return (
    <HeaderMenu>
      <ShopMenu />
      <AdminMenu {...props} />
    </HeaderMenu>
  )
}

export default headerMenu;
