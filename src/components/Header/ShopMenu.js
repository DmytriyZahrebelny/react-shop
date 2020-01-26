import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShopMenu = styled.div`
	width: 400px;

	a {
		display: inline-block;
		padding: 15px 20px 15px;
		font-size: 16px;
		text-decoration: none;
		color: #fff;
	}
`;

const shopMenu = () => {
	return (
		<ShopMenu>
			<Link to='/mobile'>Mobile</Link>
			<Link to='/tablet'>Tablet</Link>
			<Link to='/desktop'>Desktop</Link>
		</ShopMenu>
	);
};

export default shopMenu;
