import React from 'react';
import { ShopMenu, HeaderMenuLink } from '../../style/HeaderStyle/HeaderMenuStyle';

const shopMenu = () => {
  return (
    <ShopMenu>
      <HeaderMenuLink to="/mobile">Mobile</HeaderMenuLink>
      <HeaderMenuLink to="/tablet">Tablet</HeaderMenuLink>
      <HeaderMenuLink to="/desktop">Desktop</HeaderMenuLink>
    </ShopMenu>
  )
}

export default shopMenu;
