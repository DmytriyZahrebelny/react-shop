import React from 'react';
import { ShopMenuContainer, ShopMenuLink } from '../../style/ShopStyle/ShopMenuStyle';

const ShopMenu = () => (
  <ShopMenuContainer>
    <li>
      <ShopMenuLink to='/mobile'>Mobile</ShopMenuLink>
    </li>
    <li>
      <ShopMenuLink to='/tablet'>Tablet</ShopMenuLink>
    </li>
    <li>
      <ShopMenuLink to='/desktop'>Desktop</ShopMenuLink>
    </li>
  </ShopMenuContainer>
)

export default ShopMenu;