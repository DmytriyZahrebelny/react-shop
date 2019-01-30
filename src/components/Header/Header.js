import React from "react";
import { connect } from "react-redux";
import { HeaderContainer } from "../../style/HeaderStyle/HeaderStyle";
import HeaderMenu from "./HeaderMenu";
import TopHeader from "./TopHeader";
import * as actions from "../../modules/Header/headerActions";

const header = ({ cartReducer, adminReducer, getWord }) => {
  console.log("props header");
  return (
    <HeaderContainer>
      <TopHeader
        cartReducer={cartReducer}
        adminReducer={adminReducer}
        getWord={getWord}
      />
      <HeaderMenu
        cartReducer={cartReducer}
        adminReducer={adminReducer}
        getWord={getWord}
      />
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer,
    adminReducer: state.adminReducer
  };
};

export default connect(
  mapStateToProps,
  {
    getWord: actions.searchProducts
  }
)(header);
