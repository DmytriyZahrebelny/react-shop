import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ShopContainer } from '../style/shopStyle';
import { Header, HeaderLink, HeaderNav } from '../style/adminStyle';
import ShopMenu from '../components/ShopMenu';
import MobileShop from '../components/MobileShop';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const shopPage = ({ products, match : {match}, addedProductId }) => {
  return (
    <div>
      <Header>
        <HeaderNav>
          <li>
            <HeaderLink to="/shop">Shop</HeaderLink>
          </li>
          <li>
            <HeaderLink to={`${match.path}/basket`}>Cart({addedProductId.length})</HeaderLink>
          </li>
        </HeaderNav>
      </Header>
      <ShopContainer>
        <ShopMenu match={match} />
        <div>
          <Switch>
            <Route exact path={`${match.path}/mobile`}
              render={
                (match) => <MobileShop products={products} match={match} />
              }
            />
            <Route path={`${match.path}/basket`} 
              render={
                () => <CartPage products={products}  />
              }
            />

            <Route path={`${match.path}/:id`}
              render={
                (match) => <ProductPage products={products} match={match} />
              }
            />
          </Switch>
        </div>
      </ShopContainer>
    </div>
  );
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps)(shopPage);
