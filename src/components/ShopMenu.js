import React from 'react';
import { ShopMenu, ShopLink } from '../style/shopStyle';

const shopMenu = ({ match }) => {
  return (
    <ShopMenu>
      <li>
        <ShopLink to={`${match.url}/mobile`}>Mobile</ShopLink>
      </li>
      <li>
        <ShopLink to={`${match.url}/tablet`}>Tablet</ShopLink>
      </li>
      <li>
        <ShopLink to={`${match.url}/desktop`}>Desktop</ShopLink>
      </li>
    </ShopMenu>
  )
}

export default shopMenu;