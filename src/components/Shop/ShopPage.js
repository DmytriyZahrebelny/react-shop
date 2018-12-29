import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ShopContainer } from '../../style/ShopStyle/ShopPageStyle';
import ShopMenu from '../ShopMenu';
import MobileProducts from '../components/MobileProducts';
import InfoProduct from './InfoProduct';
import CartPage from './Cart';
import ShopHeader from './ShopHeader';

const ShopPage = ({ products, match : {match}, addedProductId }) => {
  return (
    <div>
      <ShopHeader match={match} addedProductId={addedProductId} />
      <ShopContainer>
        <ShopMenu match={match} />
        <div>
          <Switch>
            <Route exact path={`${match.path}/mobile`}
              render={
                (match) => <MobileProducts products={products} match={match} />
              }
            />
            <Route path={`${match.path}/basket`}
              render={
                () => <CartPage products={products} />
              }
            />
            <Route path={`${match.path}/:id`}
              render={
                (match) => <InfoProduct products={products} match={match} />
              }
            />
          </Switch>
        </div>
      </ShopContainer>
    </div>
  );
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps)(ShopPage);
