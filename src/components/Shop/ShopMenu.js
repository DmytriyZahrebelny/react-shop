import React from 'react';
import { ShopMenuContainer, ShopMenuLink } from '../../style/ShopStyle/ShopMenuStyle';

const ShopMenu = () => (
  <ShopMenuContainer>
    <li>
      <ShopMenuLink to='/mobile'>
        <p>Mobile</p>
        <img src="https://i1.rozetka.ua/goods/portal/constructors/units/groups/75/75093.120x150.jpg" alt="img" />
      </ShopMenuLink>
    </li>
    <li>
      <ShopMenuLink to='/tablet'>
        <p>Tablet</p>
        <img src="https://i2.rozetka.ua/goods/portal/constructors/units/groups/69/69546.120x150.jpg" alt="img" />
      </ShopMenuLink>
    </li>
    <li>
      <ShopMenuLink to='/desktop'>
        <p>Desktop</p>
        <img src="https://i2.rozetka.ua/goods/portal/constructors/units/groups/69/69532.120x150.jpg" alt="img" />
      </ShopMenuLink>
    </li>
  </ShopMenuContainer>
)

export default ShopMenu;