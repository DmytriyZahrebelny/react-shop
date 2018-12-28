import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ShopContainer } from '../style/ShopStyle/ShopPageStyle';
import ShopMenu from '../components/ShopMenu';
import MobileProducts from '../components/MobileProducts';
import TabletProducts from '../components/TabletProducts';
import DesktopProducts from '../components/DesktopProducts';
import InfoProduct from '../components/InfoProduct';
import Cart from '../components/Cart';
import ShopHeader from '../components/ShopHeader';

const ShopPage = ({ addedProductId, match }) => {
  console.log(match.path)

  return (
    <div>
      <ShopHeader match={match} addedProductId={addedProductId} />
      <ShopContainer>
        <ShopMenu match={match} />
        <div>
          <Switch>
            <Route exact path={`${match.path}/mobile`} component={MobileProducts} />
            <Route path={`${match.path}/tablet`} component={TabletProducts} />
            <Route path={`${match.path}/desktop`} component={DesktopProducts} />
            <Route path={`${match.path}/cart`} component={Cart} />
            <Route path={`${match.path}/:id`} component={InfoProduct} />
          </Switch>
        </div>
      </ShopContainer>
    </div>
  );
}

const mapStateToProps = state => state.cartReducer;

export default connect(mapStateToProps)(ShopPage);
