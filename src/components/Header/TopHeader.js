import React from 'react';
import { HeaderLink, TopHeader } from '../../style/HeaderStyle/HeaderStyle';

const topHeader = ({ productsId }) => {
  return (
    <TopHeader>
      <li>
        <HeaderLink to="/">Shop</HeaderLink>
      </li>
      <li>
        <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
      </li>
    </TopHeader>
  )
}

export default topHeader;