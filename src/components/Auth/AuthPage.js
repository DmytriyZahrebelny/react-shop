import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Auth = styled.div`
	width: 1200px;
	min-height: 800px;
	margin: 0 auto;
	padding-top: 100px;
	background-color: #ffffff;
`;

const Container = styled.div`
	width: 500px;
	margin: 0 auto;
	padding-bottom: 20px;
	box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`;

const LinkBox = styled.div`
	display: flex;
	justify-content: space-around;
	width: 500px;
	box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
	border-bottom: 1px solid #ff5122;
	box-shadow: none;
`;

// const RegistrationLink = styled(Link)`
// 	display: block;
// 	width: 50%;
// 	padding: 20px 0;
// 	font-size: 18px;
// 	text-align: center;
// 	text-decoration: none;
// 	color: ${({ activeLink }) => (activeLink ? '#FF5122' : '#ffffff')};
// 	background-color: ${({ activeLink }) => (activeLink ? '#ffffff' : '#FF5122')};
// 	border-bottom: 1px solid #ff5122;
// `;

// const LoginLink = styled(Link)`
// 	display: block;
// 	width: 50%;
// 	padding: 20px 0;
// 	font-size: 18px;
// 	text-align: center;
// 	text-decoration: none;
// 	color: ${({ activeLink }) => (!activeLink ? '#FF5122' : '#ffffff')};
// 	background-color: ${({ activeLink }) => (!activeLink ? '#ffffff' : '#FF5122')};
// 	border-bottom: 1px solid #ff5122;
// `;

const LoginLink = ({ activeLink, onLoginLinkClick, children }) => {
	const LinkStyle = styled(Link)`
		display: block;
		width: 50%;
		padding: 20px 0;
		font-size: 18px;
		text-align: center;
		text-decoration: none;
		color: ${() => (!activeLink ? '#FF5122' : '#ffffff')};
		background-color: ${() => (!activeLink ? '#ffffff' : '#FF5122')};
		border-bottom: 1px solid #ff5122;
	`;

	return (
		<LinkStyle onClick={onLoginLinkClick} to='/auth'>
			{children}
		</LinkStyle>
	);
};

const RegistrationLink = ({ activeLink, onRegistrationLinkClick, children }) => {
	const LinkStyle = styled(Link)`
		display: block;
		width: 50%;
		padding: 20px 0;
		font-size: 18px;
		text-align: center;
		text-decoration: none;
		color: ${() => (activeLink ? '#FF5122' : '#ffffff')};
		background-color: ${() => (activeLink ? '#ffffff' : '#FF5122')};
		border-bottom: 1px solid #ff5122;
	`;

	return (
		<LinkStyle onClick={onRegistrationLinkClick} to='/auth/registration'>
			{children}
		</LinkStyle>
	);
};

const AuthPage = () => {
	const [activeLink, setActiveLink] = useState(true);

	const onLoginLinkClick = () => setActiveLink(true);
	const onRegistrationLinkClick = () => setActiveLink(false);

	return (
		<Auth>
			<Container>
				<LinkBox>
					<LoginLink activeLink={activeLink} onLoginLinkClick={onLoginLinkClick}>
						Login
					</LoginLink>
					<RegistrationLink activeLink={activeLink} onRegistrationLinkClick={onRegistrationLinkClick}>
						Registration
					</RegistrationLink>
				</LinkBox>
				<div>
					<Switch>
						<Route exact path='/auth' component={LoginForm} />
						<Route path='/auth/registration' component={RegistrationForm} />
					</Switch>
				</div>
			</Container>
		</Auth>
	);
};

export default AuthPage;
