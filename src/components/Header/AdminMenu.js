import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminMenuContainer = styled.div`
	width: 500px;
`;

export const AdminMenuLinks = styled(Link)`
	display: inline-block;
	padding: 15px 20px 15px;
	font-size: 16px;
	text-decoration: none;
	color: #fff;
`;

const AdminMenu = ({ isAdmin = true }) => {
	if (isAdmin) {
		return (
			<AdminMenuContainer>
				<AdminMenuLinks to='/admin/change'>Change parameters</AdminMenuLinks>
				<AdminMenuLinks to='/admin/add'>Add new product</AdminMenuLinks>
				<AdminMenuLinks to='/admin/delete'>Delete product</AdminMenuLinks>
			</AdminMenuContainer>
		);
	}

	return null;
};

export default AdminMenu;
