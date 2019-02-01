import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { array, shape, func, object } from 'prop-types';
import { HeaderLink, TopHeaderNav, TextField } from '../../style/HeaderStyle/HeaderStyle';
import history from '../../modules/history';
import * as actions from '../../modules/Header/headerActions';

class TopHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.getWords = this.getWords.bind(this);
  }

  getWords(evt) {
    evt.preventDefault();
    const { getWord, router: { location } } = this.props;

    if (location.pathname !== '/search') {
      history.push('/search');
      return getWord(evt.target.search.value);
    } else {
      getWord(evt.target.search.value);
    }
  }

  render() {
    const { productsId : { productsId } } = this.props;

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
  getWord: func.isRequired,
  cartReducer: shape({
    productsId: array.isRequired,
  }),
  router: shape({
    location: object.isRequired,
  }),
};

const mapStateToProps = state => {
  return {
    productsId: state.cartReducer,
    router: state.router,
  };
}

export default connect(mapStateToProps, {
  getWord: actions.searchProducts,
})(TopHeader);

