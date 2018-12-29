import React from 'react';
import { ShopMenuContainer, ShopMenuLink } from '../../style/ShopStyle/ShopMenuStyle';

const ShopMenu = ({ match }) => {
  return (
    <ShopMenuContainer>
      <li>
        <ShopMenuLink to={`${match.url}/mobile`}>Mobile</ShopMenuLink>
      </li>
      <li>
        <ShopMenuLink to={`${match.url}/tablet`}>Tablet</ShopMenuLink>
      </li>
      <li>
        <ShopMenuLink to={`${match.url}/desktop`}>Desktop</ShopMenuLink>
      </li>
    </ShopMenuContainer>
  )
}

export default ShopMenu;