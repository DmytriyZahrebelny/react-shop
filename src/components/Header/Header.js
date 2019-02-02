import React from 'react';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';

const Header = () => (
  <HeaderContainer>
    <TopHeader />
    <HeaderMenu />
  </HeaderContainer>
);

export default Header;
