import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';
import * as headerActions from '../../modules/Header/headerActions';

const isSearched = searchTerm => {
  return item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class Header extends Component {
  render() {
    const { headerReducer : { searchProducts }, productsReduser : { products } } = this.props;
    
    if (searchProducts) {
      const test = products.filter(isSearched(searchProducts));
      console.log(test)
    }

    return (
      <HeaderContainer>
        <TopHeader {...this.props} />
        <HeaderMenu />
      </HeaderContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer,
    headerReducer: state.headerReducer,
    productsReduser: state.productsReducer,
  }
};

export default connect(mapStateToProps, {
  getWord: headerActions.searchProducts,
})(Header);
