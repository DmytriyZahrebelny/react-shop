import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Porducts from './MobileProducts';
import InfoProduct from './InfoProduct';

const MobilePage = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/mobile' component={Porducts} />
        <Route path='/mobile/:id' component={InfoProduct} />
      </Switch>
    </div>
  );
}

export default MobilePage;
