import React from 'react';
import { HeaderLink, TopHeader, TextField } from '../../style/HeaderStyle/HeaderStyle';

const topHeader = ({ productsId }) => {
  return (
    <TopHeader>
      <li>
        <HeaderLink to="/">Shop</HeaderLink>
      </li>
      <li>
        <TextField type="text" placeholder="Search" />
      </li>
      <li>
        <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
      </li>
    </TopHeader>
  )
}

export default topHeader;