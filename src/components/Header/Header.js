import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../../style/HeaderStyle/HeaderStyle';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';

const header = (props) => {
  return (
    <Header>
      <TopHeader {...props} />
      <HeaderMenu />
    </Header>
  )
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps)(header);
