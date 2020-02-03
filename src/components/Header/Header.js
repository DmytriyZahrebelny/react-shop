import React from 'react';
import styled from 'styled-components';
import TopHeader from './TopHeader/TopHeader';
import HeaderMenu from './Menu/HeaderMenu';

const HeaderContainer = styled.header`
	background-color: #1b1b1b;
`;

const Header = () => (
	<HeaderContainer>
		<TopHeader />
		<HeaderMenu />
	</HeaderContainer>
);

export default Header;
