import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopHeaderNav = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 1200px;
	padding: 15px 0;
	margin: 0 auto;
	list-style: none;
	border-bottom: 1px solid #ffffff;

	a {
		display: block;
		padding: 20px 20px 0;
		font-size: 22px;
		text-decoration: none;
		color: #ffffff;
	}
`;

const TextField = styled.input`
	width: 250px;
	padding: 8px 0 8px 20px;
	margin-top: 8px;
	font-size: 18px;
	border: none;
	border-radius: 40px;
`;

const TopHeader = ({ productsId = 0, searchProducts, location = {}, history = {} }) => {
	const getWords = evt => {
		evt.preventDefault();

		if (location.pathname !== '/search') {
			history.push('/search');
			return searchProducts(evt.target.search.value);
		}
		searchProducts(evt.target.search.value);
	};

	return (
		<TopHeaderNav>
			<li>
				<Link to='/'>Shop</Link>
			</li>
			<li>
				<form action='' onSubmit={getWords}>
					<TextField name='search' type='text' placeholder='Search' />
				</form>
			</li>
			<li>
				<Link to='/cart'>{`Cart ${productsId.length}`}</Link>
			</li>
		</TopHeaderNav>
	);
};

export default TopHeader;
