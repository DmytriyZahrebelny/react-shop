import React from 'react';
import styled from 'styled-components';
import TopHeader from './TopHeader';
import HeaderMenu from './HeaderMenu';

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
