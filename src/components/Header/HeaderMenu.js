import React from 'react';
import { HeaderMenu, HeaderMenuLink } from '../../style/HeaderStyle/HeaderMenuStyle';

const headerMenu = () => {
  return (
    <HeaderMenu>
      <HeaderMenuLink to="/mobile">Mobile</HeaderMenuLink>
      <HeaderMenuLink to="/tablet">Tablet</HeaderMenuLink>
      <HeaderMenuLink to="/desktop">Desktop</HeaderMenuLink>
    </HeaderMenu>
  )
}

export default headerMenu;
