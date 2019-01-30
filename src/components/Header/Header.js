import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';
import * as actions from '../../modules/Header/headerActions';
import * as selector from '../../modules/Header/slector';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <TopHeader {...this.props} />
        <HeaderMenu {...this.props} />
      </HeaderContainer>
    );
  }
};

const mapStateToProps = state => {
  return {
    productsId: selector.cartSelector(state),
    isAdmin: selector.adminSelector(state),
  };
};

export default connect(mapStateToProps, {
  getWord: actions.searchProducts,
})(Header);
