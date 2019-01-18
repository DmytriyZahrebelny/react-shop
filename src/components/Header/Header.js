import React from 'react';
import { connect } from 'react-redux';
import { Header, HeaderLink, HeaderNav } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';

const header = ({ productsId }) => {
  return (
    <Header>
      <HeaderNav>
        <li>
          <HeaderLink to="/">Shop</HeaderLink>
        </li>
        <li>
          <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
        </li>
      </HeaderNav>
      <HeaderMenu />
    </Header>
  )
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps)(header);
