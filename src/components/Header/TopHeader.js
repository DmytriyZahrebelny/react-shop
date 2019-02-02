import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { array, shape, func, object } from 'prop-types';
import { HeaderLink, TopHeaderNav, TextField } from '../../style/HeaderStyle/HeaderStyle';
import * as actions from '../../modules/Header/headerActions';

class TopHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.getWords = this.getWords.bind(this);
  }

  getWords(evt) {
    evt.preventDefault();
    const { searchProducts, location, history } = this.props;

    if (location.pathname !== '/search') {
      history.push('/search');
      return searchProducts(evt.target.search.value);
    } else {
      searchProducts(evt.target.search.value);
    }
  }

  render() {
    const { productsId } = this.props;

    return (
      <TopHeaderNav>
        <li>
          <HeaderLink to="/">Shop</HeaderLink>
        </li>
        <li>
          <form action="" onSubmit={this.getWords}>
            <TextField name='search' type="text" placeholder="Search" />
          </form>
        </li>
        <li>
          <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
        </li>
      </TopHeaderNav>
    )
  }
}

TopHeader.propTypes = {
  searchProducts: func.isRequired,
  cartReducer: shape({
    productsId: array.isRequired,
  }),
  router: shape({
    location: object.isRequired,
  }),
};

const mapStateToProps = state => state.cartReducer;

export default withRouter(connect(mapStateToProps, {
  searchProducts: actions.searchProducts,
})(TopHeader));

