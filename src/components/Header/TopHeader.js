import React, { PureComponent } from 'react';
import { array, shape, func, object } from 'prop-types';
import { HeaderLink, TopHeader, TextField } from '../../style/HeaderStyle/HeaderStyle';
import history from '../../modules/history';

class Header extends PureComponent {
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
    const { productsId } = this.props;

    return (
      <TopHeader>
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
      </TopHeader>
    )
  }
}

Header.propTypes = {
  getWord: func.isRequired,
  cartReducer: shape({
    productsId: array.isRequired,
  }),
  router: shape({
    location: object.isRequired,
  }),
};

export default Header;
