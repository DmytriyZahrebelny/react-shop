import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShopContainer } from '../style/shopStyle';
import { Header, HeaderLink, HeaderNav } from '../style/adminStyle';
import ShopMenu from '../components/ShopMenu';
import MobileShop from '../components/MobileShop';
import ProductPage from '../components/ProductPage';
import BasketPage from '../components/BasketPage';

const shopPage = ({ products, match : {match} }) => {
  return (
    <div>
      <Header>
        <HeaderNav>
          <li>
            <HeaderLink to="/shop">Shop</HeaderLink>
          </li>
          <li>
            <HeaderLink to={`${match.path}/basket`}>Basket</HeaderLink>
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
            <Route path={`${match.path}/basket`} component={BasketPage}/>
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

export default shopPage;
