import React from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';
import * as actions from '../../modules/Header/headerActions';

const header = (props) => {
  return (
    <HeaderContainer>
      <TopHeader {...props} />
      <HeaderMenu {...props} />
    </HeaderContainer>
  )
};

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer,
    adminReducer: state.adminReducer,
  };
};

export default connect(mapStateToProps, {
  getWord: actions.searchProducts,
})(header);
