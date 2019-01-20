import React from 'react';
import { HeaderLink, TopHeader, TextField } from '../../style/HeaderStyle/HeaderStyle';

const topHeader = ( { cartReducer : { productsId }, getWord }) => {
  return (
    <TopHeader>
      <li>
        <HeaderLink to="/">Shop</HeaderLink>
      </li>
      <li>
        <TextField type="text" onChange={evt => getWord(evt.target.value)} placeholder="Search" />
      </li>
      <li>
        <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
      </li>
    </TopHeader>
  )
}

export default topHeader;