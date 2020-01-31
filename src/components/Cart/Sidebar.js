import React from 'react';
import { number } from 'prop-types';
import { AllPrice, ToPayText, Button } from '../../style/CartStyle/CartStyle';

const sidebar = ({ allPrice }) => (
  <AllPrice>
    <ToPayText>To pay: ${allPrice}</ToPayText>
    <Button type="submit" value="Buy" />
  </AllPrice>
);

sidebar.propTypes = {
  allPrice: number.isRequired,
};

export default sidebar;