import React from 'react';
import { AllPrice, ToPayText, Button } from '../../style/ShopStyle/CartStyle';

const sidebar = ({ allPrice }) => (
  <AllPrice>
    <ToPayText>To pay: ${allPrice}</ToPayText>
    <Button type="submit" value="Buy" />
  </AllPrice>
);

export default sidebar;