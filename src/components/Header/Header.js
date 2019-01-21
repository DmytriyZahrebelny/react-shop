import React from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';
import * as headerActions from '../../modules/Header/headerActions';

const header = (props) => (
  <HeaderContainer>
    <TopHeader {...props} />
    <HeaderMenu />
  </HeaderContainer>
);


const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps, {
  getWord: headerActions.searchProducts,
})(header);
