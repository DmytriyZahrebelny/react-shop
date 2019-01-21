import React, { Component } from 'react';
import { HeaderLink, TopHeader, TextField } from '../../style/HeaderStyle/HeaderStyle';
import history from '../../modules/history';

class Header extends Component {
  constructor(props) {
    super(props);

    this.getWords = this.getWords.bind(this);
  }

  getWords(evt) {
    evt.preventDefault();
    const { getWord } = this.props;

    if (evt.target.search.value) {
      history.push('/search');
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

export default Header;
