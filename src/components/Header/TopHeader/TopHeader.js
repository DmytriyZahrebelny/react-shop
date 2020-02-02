import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHeaderHooks } from '../useHeaderHooks';

const TopHeaderNav = styled.div`
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

const TopHeader = () => {
	const { getWords, productsNumber } = useHeaderHooks();

	return (
		<TopHeaderNav>
			<Link to='/'>Shop</Link>
			<form action='' onSubmit={getWords}>
				<TextField name='search' type='text' placeholder='Search' />
			</form>
			<Link to='/cart'>{`Cart ${productsNumber.length}`}</Link>
		</TopHeaderNav>
	);
};

export default TopHeader;
