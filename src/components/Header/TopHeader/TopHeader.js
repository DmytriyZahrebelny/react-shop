import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import { useHeaderHooks } from '../useHeaderHooks';

const TopHeaderNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1200px;
	padding: 0 5px;
	margin: 0 auto;
	list-style: none;
	border-bottom: 1px solid #ffffff;

	a {
		position: relative;
		display: block;
		padding: 20px 20px 0;
		text-decoration: none;
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

const ProductsNumber = styled.div`
	position: absolute;
	left: 54px;
	top: 3px;
	width: 20px;
	height: 20px;
	padding: 1px 1px 0 1px;
	font-size: 17px;
	text-align: center;
	font-weight: bold;
	background-color: #ffffff;
	border-radius: 50%;
`;

const TopHeader = () => {
	const { getWords, productsNumber } = useHeaderHooks();

	return (
		<TopHeaderNav>
			<Link to='/'>
				<Icon name='logo' size='100' />
			</Link>
			<form action='' onSubmit={getWords}>
				<TextField name='search' type='text' placeholder='Search' />
			</form>
			<Link to='/cart'>
				<Icon name='cart' size='30' />
				<ProductsNumber>{productsNumber.length}</ProductsNumber>
			</Link>
		</TopHeaderNav>
	);
};

export default TopHeader;
