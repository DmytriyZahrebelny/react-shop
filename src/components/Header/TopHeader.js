import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	background-color: #ff5122;
`;

export const TopHeaderNav = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 1200px;
	padding: 15px 0;
	margin: 0 auto;
	list-style: none;
	border-bottom: 1px solid #ffffff;
`;

export const HeaderLink = styled(Link)`
	display: block;
	padding: 20px 20px 0;
	font-size: 22px;
	text-decoration: none;
	color: #ffffff;
`;

export const TextField = styled.input`
	width: 250px;
	padding: 8px 0 8px 20px;
	margin-top: 8px;
	font-size: 18px;
	border: none;
	border-radius: 40px;
`;

class TopHeader extends PureComponent {
	constructor(props) {
		super(props);

		this.getWords = this.getWords.bind(this);
	}

	getWords(evt) {
		evt.preventDefault();
		const { searchProducts, location, history } = this.props;

		if (location.pathname !== '/search') {
			history.push('/search');
			return searchProducts(evt.target.search.value);
		}
		searchProducts(evt.target.search.value);
	}

	render() {
		const { productsId = 0 } = this.props;

		return (
			<TopHeaderNav>
				<li>
					<HeaderLink to='/'>Shop</HeaderLink>
				</li>
				<li>
					<form action='' onSubmit={this.getWords}>
						<TextField name='search' type='text' placeholder='Search' />
					</form>
				</li>
				<li>
					<HeaderLink to='/cart'>{`Cart ${productsId.length}`}</HeaderLink>
				</li>
			</TopHeaderNav>
		);
	}
}

export default TopHeader;
