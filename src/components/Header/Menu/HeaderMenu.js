import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductsMenu from './ProductsMenu';
import AdminMenu from './AdminMenu';

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 1200px;
	margin: 0 auto;
	padding-bottom: 10px;

	a {
		display: block;
		padding: 5px 20px 5px;
		margin: 10px 10px 0;
		height: 20px;
		font-size: 16px;
		text-decoration: none;
		color: #000;
		border-radius: 10px;
		background-color: #fff;
	}
`;

const HeaderMenu = () => (
	<Menu>
		<ProductsMenu />
		<AdminMenu />
		<Link to='/auth'>Login</Link>
	</Menu>
);

export default HeaderMenu;
