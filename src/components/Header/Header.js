import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import TopHeader from './TopHeader';

const HeaderContainer = styled.header`
	background-color: #ff5122;
`;

const Header = () => (
	<HeaderContainer>
		<TopHeader />
		<HeaderMenu />
	</HeaderContainer>
);

export default Header;
