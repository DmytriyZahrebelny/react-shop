import React from 'react';
import { Header, HeaderLink, HeaderNav } from '../style/adminStyle';

const MainNav = () => {
  return (
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
  )
}



export default MainNav;