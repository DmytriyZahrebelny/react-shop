import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShopMenuContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 1200px;
	height: 750px;
	padding: 20px 0;
	margin: 20px auto;
	list-style: none;
	background-color: #ffffff;
`;

export const ShopMenuLink = styled(Link)`
	display: block;
	width: 200px;
	height: 250px;
	padding: 20px;
	font-size: 22px;
	text-align: center;
	color: #000000;
	text-decoration: none;

	:hover {
		box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
	}
`;

const ShopMenu = () => (
	<ShopMenuContainer>
		<li>
			<ShopMenuLink to='/mobile'>
				<p>Mobile</p>
				<img src='https://i1.rozetka.ua/goods/portal/constructors/units/groups/75/75093.120x150.jpg' alt='img' />
			</ShopMenuLink>
		</li>
		<li>
			<ShopMenuLink to='/tablet'>
				<p>Tablet</p>
				<img src='https://i2.rozetka.ua/goods/portal/constructors/units/groups/69/69546.120x150.jpg' alt='img' />
			</ShopMenuLink>
		</li>
		<li>
			<ShopMenuLink to='/desktop'>
				<p>Desktop</p>
				<img src='https://i2.rozetka.ua/goods/portal/constructors/units/groups/69/69532.120x150.jpg' alt='img' />
			</ShopMenuLink>
		</li>
	</ShopMenuContainer>
);

export default ShopMenu;
