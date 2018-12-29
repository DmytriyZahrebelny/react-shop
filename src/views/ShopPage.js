import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ShopContainer } from '../style/ShopStyle/ShopPageStyle';
import ShopMenu from '../components/Shop/ShopMenu';
import MobileProducts from '../components/Shop/MobileProducts';
import TabletProducts from '../components/Shop/TabletProducts';
import DesktopProducts from '../components/Shop/DesktopProducts';
import InfoProduct from '../components/Shop/InfoProduct';
import Cart from '../components/Shop/Cart';
import ShopHeader from '../components/Shop/ShopHeader';

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
