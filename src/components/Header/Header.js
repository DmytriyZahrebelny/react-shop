import React from 'react';
import { Header, HeaderLink, HeaderNav } from '../../style/HeaderStyle/HeaderStyle';

const ShopHeader = ({ match, addedProductId }) => {
  return (
    <Header>
      <HeaderNav>
        <li>
          <HeaderLink to="/">Shop</HeaderLink>
        </li>
        <li>
          <HeaderLink to={`/cart`}>Cart</HeaderLink> 
          {/* <HeaderLink to={`${match.path}/cart`}>Cart({addedProductId.length})</HeaderLink> */}
        </li>
      </HeaderNav>
    </Header>
  )
}

export default ShopHeader;
