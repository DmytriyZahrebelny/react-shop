import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductsMenu from './ProductsMenu';
import AdminMenu from './AdminMenu';
import Icon from '../../components/Icon';

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 1200px;
	margin: 0 auto;
`;

const LoginLink = styled(Link)`
	display: block;
	margin: 5px 18px 0 0;
	text-decoration: none;
`;

const HeaderMenu = () => (
	<Menu>
		<ProductsMenu />
		<AdminMenu />
		<LoginLink to='/auth'>
			<Icon name='login' size='30' />
		</LoginLink>
	</Menu>
);

export default HeaderMenu;
